import '../css/App.css';
import '../css/Posts.css'
import { useState, useEffect, useRef } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import { getPagesArray } from '../utils/pages';
import { getPageCount } from '../utils/pages';
import { useObserver } from '../hooks/useObserver';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../UI/MyModal/MyModal';
import MyButton from '../UI/button/MyButton'
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';
import MySelect from '../UI/select/MySelect';
import Pagination from '../UI/pagination/Pagination';


function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  let pagesArray = getPagesArray(totalPages);


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit])

  const changePage = (page) => {
    setPage(page);
  }

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  })


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
      <MySelect 
      className='maxPosts'
      value={limit} 
      onChange={value => setLimit(value)} 
      defaultValue="Кол-во элементов на странице" 
      options={[
        {value: 5, name: '5'}, 
        {value: 10, name: '10'}, 
        {value: 25, name: '25'}, 
        {value: -1, name: 'Показать все'}]}
      />
      {postError && 
      <h1 style={{textAlign: 'center'}}>Произошла ошибка ${postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
      <div ref={lastElement} style={{height: 20, background: 'rgb(22, 22, 22)'}}></div>
      {isPostLoading &&
       <div style={{display: 'flex', justifyContent: 'center', marginTop: 50, fontSize: '20px', fontWeight: "700", color: "teal"}}>Is Loading<Loader/></div>    
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}></Pagination>
    </div>
  );
}

export default Posts;