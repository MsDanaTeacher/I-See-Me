import React from 'react'
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"

export default function Profile({user, setUser}) {
    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')

    }
  return (
    <div>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <h1>{user.name}'s Bookshelf</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
