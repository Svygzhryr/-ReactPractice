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

  useEffect(() => {
    fetchPosts();
  }, [])

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Ruby', body: 'Description'},
    {id: 3, title: 'Lua', body: 'Description'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

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
      {isPostLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50, fontSize: '20px', fontWeight: "700", color: "teal"}}>Is Loading<Loader/></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
      }
    </div>
  );
}

export default App;