import React, { useState } from 'react'
import '../css/Post.css'

export default function Post(props) {

    const [del, setDel] = useState();

    function remove() {
        console.log(props)
    }

  return (
    <div className='post'>
        <div className='post__content'>
            <strong>{props.post.id} {props.post.title}</strong>
            <div>{props.post.body}</div>
        </div>
        <div className='post__btns'>
            <button onClick={remove}>Удалить</button>
        </div>
    </div>
  )
}
