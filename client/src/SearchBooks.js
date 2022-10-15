import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"
import BookTiles from './BookTiles'

export default function SearchBooks({user,setUser}) {
  
  
  let [bookData, setBookData] = useState([])

    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')
    }

    useEffect(() => {
      let token = localStorage.getItem('token')
      if(token){
        fetch('/collection', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data => {
            setBookData(data)
          
        })
      }
    }, [])   


  return (
    <div>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        BUILD YOUR LIBRARY!
        <button onClick={logout}>Logout</button>
        <BookTiles bookData={bookData}/>
    </div>
  )
}
