import React from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes, Switch, } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts'
import Error from '../pages/Error';

export default function Approuter() {
  return (
    <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/error' element={<Error/>}></Route>
        <Route
        path="*"
        element={<Navigate to="/error" replace />}
         />
     </Routes>
  )
}
