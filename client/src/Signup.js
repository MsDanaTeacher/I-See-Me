import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"


export default function Signup({setUser}) {

    const signupBody = {
        name: '',
        grade: '',
        email: '',
        username: '',
        password: ''
    }
    const [signupData, setSignUpData] = useState({...signupBody})

    //user enters sign up info
    const signUpChange = (e) => {
        setSignUpData({
            ...signupData,
            [e.target.name]: e.target.value
        })
    }

    //sign up new user
    const signUpSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(signupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setUser(data.user)
            localStorage.setItem('token', data.token)
           
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Signup</h1>
        <form onChange={e => signUpChange(e)} onSubmit={e => signUpSubmit(e)}>
            <input type="text" name="name" placeholder='name' value={signupData.name}/>
            <input type="text" name="grade" placeholder='grade' value={signupData.grade}/>
            <input type="text" name="email" placeholder='email' value={signupData.email}/>
            <input type="text" name="username" placeholder='username' value={signupData.username}/>
            <input type="text" name="password" placeholder='password' value={signupData.password}/>
            <button>Signup</button>
            <Link to="/">Login</Link>
        </form>
    </div>
  )
}
