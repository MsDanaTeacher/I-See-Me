import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar({user}) {

  return (
    <div className='nav-bar'>
     
        <h1 className='iseeme'>I SEE ME</h1>
          
            <Link to="/home" className='navbar-home'><h4>Home</h4></Link>
            <Link to="/community" className='navbar-names'><h4>Community</h4></Link>
            <Link to="/searchbooks" className='navbar-names'><h4>Search Books</h4></Link>
            <Link to="/profile" className='navbar-names'><h4>Profile</h4></Link>
            <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} className='image-navbar'/>
            
        
    </div>
  )
}
