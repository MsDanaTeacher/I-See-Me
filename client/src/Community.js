import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import FolloweeBookShelf from './FolloweeBookShelf';
export default function Community({currentUser,setUser}) {
  const [allUsers, setAllUsers] = useState([])
  const [following, setFollowing] = useState([])
  const [follows, setFollows] = useState([])
  // const [followeeBookshelf, setFolloweeBookshelf] = useState(false)
  // const [followeeSelected, setFolloweeSelected] = useState([])
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
            setAllUsers(data),
        )
      }
    }, []) 

    useEffect(() => {
      let token = localStorage.getItem('token')
      if(token){
        fetch('/follows', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data =>
            setFollows(data),
        )
      }
    }, []) 

    
    // function filterUsers(data){
    //   const rerenderedUsers = data.filter((el) => el.id !== currentUser.id);
    //   setAllUsers(rerenderedUsers)
    // }

    function handleFollow(user){
      let token = localStorage.getItem('token')
      if(user && user.id !== currentUser.id){
      fetch('/follows', {
      method: 'POST',
      body: JSON.stringify({follower_id: currentUser.id, followee_id: user.id}),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(res.ok){
    res.json().then((data) => setFollows([data, ...follows]));
  } else {
    alert('already following')
  }})
  
}
    }

    function handleFollowDelete(follow) {
      let token = localStorage.getItem("token");
      if(token) {
        fetch(`/follows/${follow.id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        updatedFollows(follow);
      }
    }

    function updatedFollows(follow) {
      const rerenderedFollows = follows.filter(
        (el) => el.id !== follow.id
      );
      setFollows(rerenderedFollows);
    }

    const allMembers = allUsers.map((user, i) => {
      if(user.id !== currentUser.id) {
      return (
        
         <div key={i} className="each-member">
          {/* <img src={user.image} /> */}
          <Link to={`/followeebooklesson/${user.id}`}><p className='followee-follower-username'>{user.username}</p></Link>
          <p>{user.grade}</p>
          <button onClick={() => handleFollow(user)} className='follow-unfollow-button'>follow</button>
          </div>
      )}})

    const allFavorites = follows.map((follow, i) => {
      return (
        <div key={i} className="each-favorite">
          {/* <img src={follow.image} /> */}
          <Link to={`/followeebooklesson/${follow.id}`}><p className='followee-follower-username'>{follow.username}</p></Link>
          <button onClick={() => handleFollowDelete(follow)} className='follow-unfollow-button'>unfollow</button>
          </div>
      )
    })

  return (
    <div>
        <Link to="/"><button onClick={logout} className='logout-button'>Logout</button></Link>
      {currentUser.username.length > 0 ? <NavBar /> : null}
      <div className='follower-followee-divs'>
      <div className='favorite-teachers'>
        <div><h4 className='favorite-teachers-title'>Favorite Teachers</h4>
      <div className='favorite-teachers'>
      {allFavorites}
    </div>
    </div>
    </div>
    <div className='members'>
    <div><h4 className='favorite-teachers-title'>Our Members</h4>
    <div className='members'>
    {allMembers}
    </div>
    </div>
    </div>
</div>
</div>
  )}