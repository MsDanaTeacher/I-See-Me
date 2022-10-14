import React from 'react'
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"

export default function SearchBooks({user,setUser}) {
    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')

    }
  return (
    <div>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        SearchBooks
        <button onClick={logout}>Logout</button>
    </div>
  )
}
