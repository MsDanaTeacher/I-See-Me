import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"
import BookTiles from './BookTiles'

export default function SearchBooks({user,setUser}) {
  
  
  const [bookData, setBookData] = useState([])
  // const [filteredBooks, setFilteredBooks] = useState(bookData)
  
    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')
    }

    useEffect(() => {
      let token = localStorage.getItem('token')
      if(token){
        fetch('/collection', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data => {
            setBookData(data)
          
        })
      }
    }, [bookData])   


    function handleChange(e){
      console.log(e.target.value)
      if(e.target.value === bookData.subject){
        setBookData(bookData.subject)
       console.log("it's a match!")
      }
    }
  return (
    <div>
        <button onClick={logout}>Logout</button>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <input type="text" placeholder="Search titles..."/>
        <img src={process.env.PUBLIC_URL+"images/free_icon_1_copy.svg"} height="40px" width="40px"/>
        <select onChange={handleChange}>
          <option value="Select">Select</option>
          <option value="Girls in Tech">Girls in Tech</option>
          <option value="LGBTQIA+">LGBTQIA+</option>
          <option value="Families">Families</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Celebrating Skin Color">Celebrating Skin Color</option>
          <option value="African, African American">African, African American</option>
          <option value="American Indian">American Indian</option>
          <option value="Asian American & Pacific Islander">Asian American & Pacific Islander</option>
          <option value="Persons with Disabilities">Persons with Disabilities</option>
          <option value="Muslim">Muslim</option>
          <option value="Jewish">Jewish</option>
          <option value="Latinx">Latinx</option>
          <option value="Social Justice">Social Justice</option>
        </select>
        <br />
        BUILD YOUR LIBRARY!
        <BookTiles bookData={bookData}/>
    </div>
  )
}
