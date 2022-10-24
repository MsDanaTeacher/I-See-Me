import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate, Link } from "react-router-dom"
import BookTiles from './BookTiles'
import SearchBar from './SearchBar'

export default function SearchBooksPage({user,setUser, bookData}) {
  // const [bookData, setBookData] = useState([])
  //want filtered books to be empty because no subject is selected to start
  const [filteredBooks, setFilteredBooks] = useState()
  const [search, setSearch] = useState("")
  const [displayedBooks, setDisplayedBooks] = useState([...bookData])
//displayed books starts out as all the book data
    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')
    }
      
    //any time the dropdown menu value changes, want it to rerender the page with those filtered books
    useEffect(() => setDisplayedBooks([...searchForBooks]), [filteredBooks, search])
    
    
    const filteredBooksBySubject = bookData.filter((book) => {
      //if filter is selected, return the books whose subject match that filter
      if (!!filteredBooks && filteredBooks !== "Select"){
        return book.subject === filteredBooks
        //otherwise, return all the books
      } else {
        return book
      }
    })
    const searchForBooks = filteredBooksBySubject.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
    

    function handleFilteringBooks(e){
      setFilteredBooks(e.target.value)
    }

    
  return (
    <div>
        <button onClick={logout} className='logout-button'>Logout</button>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <div className='search-and-filter-books'>
        <SearchBar search={search} setSearch={setSearch}/>
        <select onChange={handleFilteringBooks} value={filteredBooks} className='selection-two'>
          <option value="Select">Subject</option>
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
        </div>
        <br />
        <div className='wrapper-for-book-search-box'><div className='build-your-library'><h3>BUILD YOUR LIBRARY!</h3></div>
        <BookTiles books={displayedBooks} user={user}/></div>
        <h3 className='book-recommendation-form-link'>Have a book recommendation? Share it <Link to="/bookrecommendation" className='share-here'>here!</Link></h3>
    </div>
  )
}
