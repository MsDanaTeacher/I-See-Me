import React, { useState } from 'react'
import { Link } from "react-router-dom"
import UserBookLesson from './UserBookLesson'

export default function UserBookTiles({user, userbooks, handleDeleteBook}) {
const [linkClicked, setLinkClicked] = useState(false)
const [clickedUserBook, setClickedUserBook] = useState([])

function handleLinkClick(book){
  setLinkClicked(prev => !prev)
  setClickedUserBook(book)
}

const allUserBooks = userbooks.map((book, i) => {
      
    return (
      
       <div key={i} className='each-user-book-spacing'>
        <p className='user-bookshelf-books-titles'>{book.title}</p>
        {/* <Link key={book.id} to={`/userbooklesson/${user.id}/${book.id}`} onClick={() => handleLinkClick(book)}><p className='create-a-lesson'>Create a Lesson!</p></Link> <br /> */}
        <img src={book.image} className='user-bookshelf-books'/><br />
        <Link key={book.id} to={`/userbooklesson/${user.id}/${book.id}`} onClick={() => handleLinkClick(book)}><p className='create-a-lesson'>Create a Lesson!</p></Link> 
        <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} className='user-bookshelf-books-book-image'/>
        <p className='remove-from-shelf' onClick={() => handleDeleteBook(book)}>Remove from shelf</p>
        {/* <img src={process.env.PUBLIC_URL+"images/shopping_cart.svg"} height="50px" width="50px" />
        <p>I want it!</p> */}
        </div>
    )})

  return (
    <div className="user-book-tiles-wrapper">
        {linkClicked ? <UserBookLesson user={user} book={clickedUserBook}/> : allUserBooks}
    </div>
  )
}
