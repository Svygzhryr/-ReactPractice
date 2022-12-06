import React from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom';
import {routes} from '../router/routes'

export default function Approuter() {
  return (
    <Routes>
        {routes.map((routes, index) => 
          <Route key={index} element={<routes.Element/>} path={routes.path}/>
        )}    
    </Routes>
  )
}
