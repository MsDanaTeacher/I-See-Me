import React from 'react'
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"

export default function RecommendationForm({user, setUser}) {
    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')
    }
  return (
    <div>
        <button onClick={logout}>Logout</button>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        RecommendationForm
    </div>
  )
}
