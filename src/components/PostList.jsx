import React from 'react'
import Post from './Post'

export default function PostList({posts, title, remove}) {

  if (!posts.length) {
    return <h1 className='empty'>Посты не найдены!</h1>
  }
    
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Список постов</h1>
        {posts.map((posts, index) => 
        <Post remove={remove} number={index + 1} posts={posts} key={posts.id}/>)}
    </div>
  )
}
 