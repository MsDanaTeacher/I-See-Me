import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import React, { useState, useEffect } from 'react';
import Userhome from './Userhome';
import Footer from './Footer';
import Community from './Community';
import SearchBooks from './SearchBooks';
import Profile from './Profile';

function App() {

  let [user, setUser] = useState({ username: '' })

  //auto login
  useEffect(() => {
    let token = localStorage.getItem('token')
    if(token && !user.username){
      fetch('/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if(data.user){
          setUser(data.user)
        }
      })
    }
  }, [])


  return (
      <>
      
      <Routes>
        
        <Route exact path="/" element={user.username.length === 0 ? 
      <Login user={user} setUser={setUser}/> : <Userhome user={user} setUser={setUser}/>}/>
        <Route path="/signup" element={<Signup setUser={setUser}/>}/>    
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/home" element={<Userhome user={user} setUser={setUser}/>}/>
        <Route path="/community" element={<Community user={user} setUser={setUser}/>}/>
        <Route path="/searchbooks" element={<SearchBooks user={user} setUser={setUser}/>}/>
        <Route path="/profile" element={<Profile user={user} setUser={setUser}/>}/>
      </Routes>
      <Footer />
      </>
  );
}

// {/* {user.username.length === 0 ? 
//       <Login user={user} setUser={setUser}/> : <Header user={user} setUser={setUser}/>} */}
export default App;
