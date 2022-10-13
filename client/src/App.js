import './App.css';
import Login from './Login';
import Signup from './Signup';
import React, { useState, useEffect } from 'react';
import Header from './Header';

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
    <div className="App">
      <Signup setUser={setUser}/>
      {user.username.length === 0 ? 
      <Login user={user} setUser={setUser}/> : <Header user={user} setUser={setUser}/>}
    </div>
  );
}

export default App;
