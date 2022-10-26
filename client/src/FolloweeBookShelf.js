import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import FolloweeBookLesson from './FolloweeBookLesson';
import NavBar from "./NavBar";

export default function FolloweeBookShelf({user, setUser}) {
  const params = useParams();
  const [followeeBookshelf, setFolloweeBookshelf] = useState({})
  const [bookshelfBooks, setBookshelfBooks] = useState([])

  const logout = () => {
    setUser({username: ''})
    localStorage.removeItem('token')
}

  useEffect(() => {
  let token = localStorage.getItem("token");
  if(token){
  fetch(`/followeeinformation/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
    setFolloweeBookshelf(data)
    setBookshelfBooks(data.book_collections)})
  }
  }, [])


const bookshelf = bookshelfBooks.map((book, i) => {
   return ( <div key={i} className='each-user-book-spacing'>
        <p className='user-bookshelf-books-titles'>{book.title}</p>
        
      <img src={book.image} className='user-bookshelf-books'/><br />
      <Link to={`/followeebooklessondetails/${params.id}/${book.id}`}><p className='create-a-lesson'>See Lesson!</p></Link>
      </div>
)})


  return (
    <div>
      <Link to="/"><button onClick={logout} className='logout-button'>Logout</button></Link>
      {user.username.length > 0 ? <NavBar /> : null}
    
      
      <div className="user-bookshelf-name">
        <img src="../images/closedbook.png" className="bookshelf-book-picture"/>
        <h3>{followeeBookshelf.username}'s Bookshelf</h3>
        <br />
        {/* <div>
          <Link to="/community"><h3 className="user-bookshelf-back">back</h3></Link>
        </div> */}
      </div>
      <div className="user-book-tiles-wrapper">
         {bookshelf}
      </div>
      </div>
     
    
  )}