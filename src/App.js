import './css/App.css';
import { useRef, useState } from 'react';
import PostList from './components/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function App() {

  const [post, setPost] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Ruby', body: 'Description'},
    {id: 3, title: 'Lua', body: 'Description'},
  ])

  const [title, setTitle] = useState('');
  const bodyInputRef = useRef();

  function addNewPost(e) {
    e.preventDefault();
    console.log(title)
    console.log(bodyInputRef.current.value)
  }

  return (
    <div className='App'>
      <form>
        {/* Управляемый компонент */}
        <MyInput onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="Название поста"></MyInput>
        {/* Неуправляемый компонент */}
        <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста"></MyInput>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList post={post} title="Посты про JS"/>
    </div>
  );
}

export default App;