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
        <button onClick={logout} className='logout-button'>Logout</button>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <form onSubmit={handleSubmit} className='recommendation-form-overlay'>
            <p className='form-title'>We’d love to hear your book recommendations!</p>
            <label className='recommendation-form-first-two-inputs'>Title <br/><input type="text" name="title" value={toSend.title} onChange={handleChange} className='recommendation-form-first-two-inputs-boxes'/></label><br/>
            <label className='recommendation-form-first-two-inputs'>Author <br/><input type="text" name="author" value={toSend.author} onChange={handleChange} className='recommendation-form-first-two-inputs-boxes'/></label><br/>
            <label className='recommendation-form-first-two-inputs'>What makes this book special?<br/><input type="text" name="special" value={toSend.special} onChange={handleChange} className='recommendation-form-paragraph'/></label><br/>
            <button type="submit" className='submit-button'>Submit</button>
        </form>
        <img src="images/girlanddog.png" className='recommendation-form-image'/>
        </div>

  )
}
