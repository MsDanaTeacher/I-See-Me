import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"
import UserBookTiles from './UserBookTiles'

export default function Profile({user, setUser, books}) {
  const [userBookData, setUserBookData] = useState([])
    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')

    }

    useEffect(() => {
      let token = localStorage.getItem('token')
      if(token){
        fetch('/userbooks', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data =>
            setUserBookData(data)
        )
      }
    }, []) 

    

  return (
    <div>
        <button onClick={logout}>Logout</button>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <h1>{user.name}'s Bookshelf</h1>
        <div className='book-tiles'>
        <UserBookTiles user={user} userbooks={userBookData} books={books}/>
        </div>
    </div>
  )
}
