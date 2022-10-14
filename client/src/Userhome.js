import React from 'react'

export default function Userhome({user, setUser}) {
    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')
    }
    
  return (
    <div>
        <h1>Hi, {user.name}</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
