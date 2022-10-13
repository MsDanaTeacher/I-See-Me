import React from 'react'

export default function Header({user, setUser}) {
    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')
    }
    
  return (
    <div>
        <h1>Hi, {user.username}</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
