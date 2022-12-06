import {React, useContext} from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import {publicRoutes, privateRoutes} from '../router/routes'
import Login from '../pages/Login';
import Loader from '../UI/Loader/Loader';

export default function Approuter() {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }
  
  return (
    isAuth
    ? 
    <Routes>
      {privateRoutes.map((routes, index) => 
        <Route key={index} element={<routes.Element/>} path={routes.path}/>
      )}  
    </Routes>
    : 
    <Routes>
       {publicRoutes.map((routes, index) => 
        <Route key={index} element={<routes.Element/>} path={routes.path}/>
      )}      
      <Route path='/login' element={<Login/>}/>
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
    
  )
}
