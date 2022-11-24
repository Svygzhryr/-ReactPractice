import React from 'react'
import Post from './Post'

export default function PostList({post, title}) {

    
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Список постов</h1>
        {post.map(post => 
        <Post post={post} key={post.id}/>)}
    </div>
  )
}
