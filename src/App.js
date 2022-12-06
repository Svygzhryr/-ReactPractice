import './css/App.css';
import Navbar from './UI/Navbar/Navbar';
import Approuter from './components/Approuter';
import { AuthContext } from './context';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
      <Navbar/>
      <Approuter/>
    </AuthContext.Provider>
  );
}

export default App;