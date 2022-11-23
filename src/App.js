import './css/App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + Math.round(Math.random() * 10))
  }

  function removeCount() {
    setCount(count - Math.round(Math.random() * 10))
  }

  return (
    <div className='App'>
      <button onClick={addCount}>Increment</button>
      <button onClick={removeCount}>Decrement</button>
      <div className='screen'>{count}</div>
    </div>
  );
}

export default App;