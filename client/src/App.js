import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import React, { useState, useEffect } from 'react';
import Userhome from './Userhome';
import Footer from './Footer';
import Community from './Community';
import SearchBooksPage from './SearchBooksPage';
import Profile from './Profile';
import RecommendationForm from './RecommendationForm';
import UserBookLesson from './UserBookLesson';

function App() {

  let [user, setUser] = useState({ username: '' })
  const [bookData, setBookData] = useState([])
  
  useEffect(() => {
    let token = localStorage.getItem('token')
    if(token){
      fetch('/collection', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(
          setBookData 
      )
    }
  }, []) 
  
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
        <Route path="/community" element={<Community currentUser={user} setUser={setUser}/>}/>
        <Route path="/searchbooks" element={<SearchBooksPage user={user} setUser={setUser} bookData={bookData}/>}/>
        <Route path="/profile" element={<Profile user={user} setUser={setUser} books={bookData}/>}/>
        <Route path="/bookrecommendation" element={<RecommendationForm user={user} setUser={setUser}/>}/>
        <Route path={`/userbooklesson/:userid/:bookid`} element={<UserBookLesson user={user} setUser={setUser}/>}/>
      </Routes>
      <Footer />
      </>
  );
}

export default App;
