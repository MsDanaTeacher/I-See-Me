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
            <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px"/>
        </li>
    </div>
  )
}
