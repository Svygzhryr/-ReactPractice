import React, { useState } from 'react'
import '../css/Post.css'
import MyButton from '../UI/button/MyButton'

export default function Post(props) {

    const [del, setDel] = useState();
        
  return (
    <div className='post'>
        <div className='post__content'>
            <strong>{props.number} {props.posts.title}</strong>
            <div>{props.posts.body}</div>
            <div className='post__btns'>
            <MyButton onClick={() => {props.remove(props.posts)}}>Удалить</MyButton>
        </div>
        </div>
    </div>
  )
}
