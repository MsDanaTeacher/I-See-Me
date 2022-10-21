import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import FolloweeBookLesson from './FolloweeBookLesson';
import NavBar from "./NavBar";

export default function FolloweeBookShelf({user}) {
  const params = useParams();
  const [followeeBookshelf, setFolloweeBookshelf] = useState({})
  const [bookshelfBooks, setBookshelfBooks] = useState([])
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
console.log(followeeBookshelf)
const bookshelf = bookshelfBooks.map((book, i) => {
   return ( <div key={i} className="books">
        <p>{book.title}</p>
         <br />
         <Link to={`/followeebooklessondetails/${params.id}/${book.id}`}><p>See Lesson!</p></Link>
      <img src={book.image} height="200px" width="200px"/><br />
      </div>
)})
  return (
    <div>
      {user.username.length > 0 ? <NavBar /> : null}
    
      <div className='book-tiles'>
        
         {bookshelf}
      </div>
      </div>
    
  )}