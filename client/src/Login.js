import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Login({setUser}) {

  const loginBody = {
    username: '',
    password: ''
  }

  const [loginData, setLoginData] = useState({...loginBody})

  function loginChange(e){
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const loginSubmit = (e) => {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(res => res.json())
    .then(data => {
      //set user
      //set token
      setUser(data.user)
      localStorage.setItem('token', data.token)
    })
  }

  return (
    <div>
      <h1>I SEE ME</h1>
      <p>Please login to your account</p>
      <form onChange={e => loginChange(e)} onSubmit={e => loginSubmit(e)}>
        <input type="text" name="username" placeholder='username' value={loginData.username}/>
        <input type="password" name="password" placeholder='password' value={loginData.password}/>
        <button>Login</button>
      </form>
      <div>
        <p>Don't have an account?</p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}
