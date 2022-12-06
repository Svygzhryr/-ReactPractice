import {React, useContext} from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import {publicRoutes, privateRoutes} from '../router/routes'
import Login from '../pages/Login';

export default function Approuter() {
  const {isAuth} = useContext(AuthContext);
  
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
