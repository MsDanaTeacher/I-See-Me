import React, { useState, useEffect } from 'react'

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
      <h1>Login</h1>
      <form onChange={e => loginChange(e)} onSubmit={e => loginSubmit(e)}>
        <input type="text" name="username" placeholder='username' value={loginData.username}/>
        <input type="text" name="password" placeholder='password' value={loginData.password}/>
        <input type="submit" name="submit"/>
      </form>
    </div>
  )
}
