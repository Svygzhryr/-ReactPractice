import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Post from './Post'

export default function PostList({posts, title, remove}) {

  if (!posts.length) {
    return <h1 className='empty'>Посты не найдены!</h1>
  }
    
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Список постов</h1>
        <TransitionGroup>
          {posts.map((posts, index) => 
        <CSSTransition
        key={posts.id}
        timeout={500}
        classNames='post'
        >
         <Post remove={remove} number={index + 1} posts={posts} />
        </CSSTransition>
        )}
        </TransitionGroup>
    </div>
  )
}
 