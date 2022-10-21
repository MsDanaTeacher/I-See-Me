import React, { useState } from 'react'
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"
// import { send } from 'emailjs-com';
import * as emailjs from 'emailjs-com';

export default function RecommendationForm({user, setUser}) {
    const [toSend, setToSend] = useState({
        title: '',
        author: '',
        special: ''
      });
    
    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          'service_pkqmftw',
          'template_rssolke',
          e.target,
          'hUeoGf71JDOOy-o_v'
        )
          .then((result) => {
            alert('email sent successfully');
          }, (error) => {
            alert('error sending email');
          });
          e.target.reset();
      };

  return (
    <div>
        <button onClick={logout}>Logout</button>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <form style={{border: "2px solid blue", padding: "20px", margin: "20px", width: "500px"}} onSubmit={handleSubmit}>
            <p>We’d love to hear your book recommendations!</p>
            <label>Title <br/><input type="text" name="title" value={toSend.title} onChange={handleChange}/></label><br/>
            <label>Author <br/><input type="text" name="author" value={toSend.author} onChange={handleChange}/></label><br/>
            <label>What makes this book special?<br/><input type="text" name="special" value={toSend.special} onChange={handleChange}/></label><br/>
            <button type="submit">Submit</button>
        </form>
        <img src="https://i.pinimg.com/564x/b6/b9/ac/b6b9ac34c0e6d186cd96efa005be5b50--childrens-book-illustration-book-illustrations.jpg" height="400px" width="450px"/>
    </div>
  )
}
