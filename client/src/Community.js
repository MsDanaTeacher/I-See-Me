import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"

export default function Community({currentUser,setUser}) {
  const [allUsers, setAllUsers] = useState([])
  const [following, setFollowing] = useState([])

    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')

    }

    useEffect(() => {
      let token = localStorage.getItem('token')
      if(token){
        fetch('/users', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data =>
            filterUsers(data)
        )
      }
    }, []) 


    function filterUsers(data){
      const rerenderedUsers = data.filter((el) => el.id !== currentUser.id);
      setAllUsers(rerenderedUsers)
    }

    function handleFollow(user){
      console.log(user.id, currentUser.id)
      let token = localStorage.getItem('token')
      if(user){
      fetch('/follows', {
      method: 'POST',
      body: JSON.stringify({follower_id: currentUser.id, followee_id: user.id}),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => 
    setFollowing(data))
}
console.log(following)
    }

    const allMembers = allUsers.map((user, i) => {
      
      return (
        
         <div key={i} className="each-member">
          <img src={user.image} />
          <p>{user.username}</p>
          <p>{user.grade}</p>
          <button onClick={() => handleFollow(user)}>follow</button>
          </div>
      )})

  return (
    <div>
        <button onClick={logout}>Logout</button>
        {currentUser.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <div className='favorite-teachers'>
          <p>Favorite Teachers</p>
        </div>
        <div className='members'>
          <p>Our Members</p>
        {allMembers}
        </div>
    </div>
  )
}
