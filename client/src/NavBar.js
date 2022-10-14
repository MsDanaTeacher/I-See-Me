import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar({user}) {
    
  return (
    <div>
        <h1>I SEE ME</h1>
        <li>
            <Link to="/home">Home</Link>
            <Link to="/community">Community</Link>
            <Link to="/searchbooks">Search Books</Link>
            <Link to="/profile">Profile</Link>
        </li>
    </div>
  )
}
