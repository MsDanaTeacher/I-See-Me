import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate, Link } from "react-router-dom"
import BookTiles from './BookTiles'
import SearchBar from './SearchBar'

export default function SearchBooks({user,setUser}) {
  const [bookData, setBookData] = useState([])
  const [filteredBooks, setFilteredBooks] = useState({...bookData})
  const [search, setSearch] = useState("")

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
        .then(
            setBookData 
        )
      }
    }, []) 
      
  function handleFilteringBooks(e){
    setFilteredBooks(e.target.value)
  }

    
  const filteredBooksBySubject = bookData.filter((book) => book.subject === filteredBooks )
  const searchForBooks = bookData.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
        <button onClick={logout}>Logout</button>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <SearchBar search={search} setSearch={setSearch}/>
        <select onChange={handleFilteringBooks} value={filteredBooks}>
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
        </select>
        <br />
        BUILD YOUR LIBRARY!
        <BookTiles books={searchForBooks}/>
        <p>Have a book recommendation? Share it <Link to="/bookrecommendation">here!</Link></p>
    </div>
  )
}
