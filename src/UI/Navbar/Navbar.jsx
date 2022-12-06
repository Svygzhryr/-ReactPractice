import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'
import MyButton from '../button/MyButton'

export default function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  return (
    <div className='navbar'>
      <MyButton onClick={logout}>Выйти</MyButton>
    <div className='navbar__links'>
       <Link style={{margin: '0 10px'}} to='/about'>О сайте</Link>
       <Link style={{margin: '0 10px'}} to='/posts'>Посты</Link>
    </div>
  </div>
  )
}
