import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;