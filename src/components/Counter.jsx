import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    function addCount() {
        setCount(count + Math.round(Math.random() * 10))
      }
    
      function removeCount() {
        setCount(count - Math.round(Math.random() * 10))
      }

  return (
    <div>
      <button onClick={addCount}>Increment</button>
      <button onClick={removeCount}>Decrement</button>
      <div className='screen'>{count}</div>
    </div>
  )
}

export default Counter
