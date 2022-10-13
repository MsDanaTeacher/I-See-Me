import './App.css';
import Login from './Login';
import Signup from './Signup';
import React, { useState } from 'react';
import Header from './Header';

function App() {

  let [user, setUser] = useState({ username: '' })

  return (
    <div className="App">
      <Signup setUser={setUser}/>
      {user.username.length === 0 ? 
      <Login setUser={setUser}/> : <Header user={user} setUser={setUser}/>}
    </div>
  );
}

export default App;
