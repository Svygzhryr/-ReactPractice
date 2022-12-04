import React, { useState } from 'react'
import '../css/Post.css'
import MyButton from '../UI/button/MyButton'
import { useNavigate } from 'react-router-dom';

export default function Post(props) {

    const router = useNavigate();
        
  return (
    <div className='post'>
        <div className='post__content'>
            <strong>{props.posts.id}. {props.posts.title}</strong>
            <div>{props.posts.body}</div>
            <div className='post__btns'>
            <MyButton onClick={() => {props.remove(props.posts)}}>Удалить</MyButton>
        </div>
        <div className='post__btns'>
            <MyButton onClick={() => {props.remove(props.posts)}}>Открыть</MyButton>
        </div>
        </div>
    </div>
  )
}
