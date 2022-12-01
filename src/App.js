import './css/App.css';
import { useRef, useMemo, useState, useEffect } from 'react';
import { usePosts } from './hooks/usePosts';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/button/MyButton'
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    setTotalCount(response.headers['x-total-count'])
  })
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  useEffect(() => {
    fetchPosts();
  }, [])


  return (
    <div className='App'>
      <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
      <MyButton  onClick={() => {setModal(true)}}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 10px'}}></hr>
      <PostFilter 
      filter={filter} 
      setFilter={setFilter}
      />
      {postError && 
      <h1 style={{textAlign: 'center'}}>Произошла ошибка ${postError}</h1>
      }
      {isPostLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50, fontSize: '20px', fontWeight: "700", color: "teal"}}>Is Loading<Loader/></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
      }
    </div>
  );
}

export default App;