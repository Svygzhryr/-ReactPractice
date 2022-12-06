import './css/App.css';
import Navbar from './UI/Navbar/Navbar';
import Approuter from './components/Approuter';
import { AuthContext } from './context';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <Navbar/>
      <Approuter/>
    </AuthContext.Provider>
  );
}

export default App;