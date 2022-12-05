import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
    <div className='navbar__links'>
       <Link style={{margin: '0 10px'}} to='/about'>О сайте</Link>
       <Link style={{margin: '0 10px'}} to='/posts'>Посты</Link>
    </div>
  </div>
  )
}
