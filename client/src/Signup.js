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
            setUser(data.user)
            localStorage.setItem('token', data.token)
        //    console.log(data.user)
           
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Signup</h1>
        <form onChange={e => signUpChange(e)} onSubmit={e => signUpSubmit(e)}>
            <input type="text" name="name" placeholder='name' value={signupData.name}/>
            {/* <input type="text" name="grade" placeholder='grade' value={signupData.grade}/> */}
            <select name="grade" value={signupData.grade}>
                <option value="Select Grade">Select Grade</option>
                <option value="Kindergarten Teacher">Kindergarten Teacher</option>
                <option value="First Grade Teacher">First Grade Teacher</option>
                <option value="Second Grade Teacher">Second Grade Teacher</option>
                <option value="Third Grade Teacher">Third Grade Teacher</option>
                <option value="Fourth Grade Teacher">Fourth Grade Teacher</option>
                <option value="Fifth Grade Teacher">Fifth Grade Teacher</option>
             </select>
            <input type="text" name="email" placeholder='email' value={signupData.email}/>
            <input type="text" name="username" placeholder='username' value={signupData.username}/>
            <input type="text" name="password" placeholder='password' value={signupData.password}/>
            {/* <input type="file" name="image" accept="image/*" value={signupData.image}/> */}
            <div class="dropdown">
            <button class="dropbtn">
                Country Flags
            </button>
              
            <div class="dropdown-content">
                <a href="#">
                    <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20200630132503/iflag.jpg"
                    width="20" height="15"/> India</a>
  
                <a href="#">
                    <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20200630132504/uflag.jpg"
                    width="20" height="15"/> USA</a>
                <a href="#">
                    <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20200630132502/eflag.jpg"
                    width="20" height="15"/> England</a>
                <a href="#">
                    <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20200630132500/bflag.jpg"
                    width="20" height="15"/> Brazil</a>
            </div>
        </div>
            <button>Signup</button>
            <Link to="/">Login</Link>
        </form>
    </div>
  )
}
