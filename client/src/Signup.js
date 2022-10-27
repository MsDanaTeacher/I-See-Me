import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"


export default function Signup({setUser}) {

    const signupBody = {
        name: '',
        grade: '',
        email: '',
        username: '',
        password: '',
        image: ''
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
       console.log(data)
           
        })
        alert('User created!')
        .catch(err => console.log(err))
    }

     //    setUser(data.user)
        //    localStorage.setItem('token', data.token)
  return (
    <div className='signup'>
        <form onChange={e => signUpChange(e)} onSubmit={e => signUpSubmit(e)} className='signup-form'>
        <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px"/>
        <h1>I SEE ME</h1>
        <h3>Signup</h3>
        <div className='signup-wrapper'>
        <div className='name-grade'>
        <label className='email-label'>Email</label><br />
            <input type="text" name="email" value={signupData.email} className='select'/>
            <select name="grade" value={signupData.grade} className='select-grade'>
                <option value="Select" className='signup-options'>Select Grade</option>
                <option value="Kindergarten Teacher">Kindergarten Teacher</option>
                <option value="First Grade Teacher">First Grade Teacher</option>
                <option value="Second Grade Teacher">Second Grade Teacher</option>
                <option value="Third Grade Teacher">Third Grade Teacher</option>
                <option value="Fourth Grade Teacher">Fourth Grade Teacher</option>
                <option value="Fifth Grade Teacher">Fifth Grade Teacher</option>
             </select>
              
                 
             <label className='username-label'>Username</label>
            <input type="text" name="username" value={signupData.username} className='select'/>
            <label className='password-label'>Password</label><br/>
            <input type="text" name="password" value={signupData.password} className='select'/>
            
            {/* <label className='image-labels'>Image</label>
            <input type="text" name="image" value={signupData.image} className='select'/> */}
            </div>
            {/* <input type="file" name="image" accept="image/*" value={signupData.image} className='login-input-spacing'/><br /> */}
            <button className='signup-button'>Signup</button><br />
            <Link to="/" className='signup-login-button'>Login</Link>
            </div>
        </form>
        </div>
  )
}
