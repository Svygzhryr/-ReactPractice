import React from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import isAuth from '../components/Approuter'
import { useContext } from 'react'
import { AuthContext } from '../context'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
    const {iaAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        navigate('/posts');
        localStorage.setItem('auth', 'true');
    }
    const navigate = useNavigate();
  return (
    <div>       
        <h1>Страница для логина</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="Введите логин"></MyInput>
            <MyInput type="password" placeholder="Терь пароль"></MyInput>
            <MyButton>Войти</MyButton>
        </form>
    </div>
  )
}
