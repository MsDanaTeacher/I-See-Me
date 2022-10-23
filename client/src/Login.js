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
    <div className='login'>
      <form onChange={e => loginChange(e)} onSubmit={e => loginSubmit(e)}>
        <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px" className='login-input-spacing'/>
        <h1 className='login-input-spacing'>I SEE ME</h1>
        <p className='please-login'>Please login to your account</p>
        <p className='login-input-spacing, username-input'>Username</p>
        <input type="text" name="username" value={loginData.username}className='login-input-spacing, login-input-width'/><br />
        <p className='login-input-spacing, username-input'>Password</p>
        <input type="password" name="password" value={loginData.password}className='login-input-spacing, login-input-width'/><br />
        <button className='login-button'>Login</button>
        <p className='login-input-spacing'>Don't have an account?</p>
        <Link to="/signup" className='sign-up-button'>Sign Up</Link>
      </form>    
    </div>
  )
}
