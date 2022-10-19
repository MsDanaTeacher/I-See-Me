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
      
       <div key={i} className="books">
        <p>{book.title}</p>
        <Link key={book.id} to={`/userbooklesson/${user.id}/${book.id}`} onClick={() => handleLinkClick(book)}>Create a Lesson!</Link> <br />
        <img src={book.image} height="200px" width="200px"/><br />
        <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px" onClick={() => handleDeleteBook(book)}/>
        <p>Remove from shelf</p>
        {/* <img src={process.env.PUBLIC_URL+"images/shopping_cart.svg"} height="50px" width="50px" />
        <p>I want it!</p> */}
        </div>
    )})

  return (
    <div className='book-tiles'>
        {linkClicked ? <UserBookLesson user={user} book={clickedUserBook}/> : allUserBooks}
    </div>
  )
}
