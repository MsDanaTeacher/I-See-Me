import React from 'react'

export default function UserBookTiles({userbooks,handleDeleteBook}) {
 
const allUserBooks = userbooks.map((book, i) => {
      
    return (
       <div key={i} className="books">
        <p>{book.title}</p>
        <img src={book.image} height="200px" width="200px"/><br />
        <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px" onClick={() => handleDeleteBook(book)}/>
        <p>Remove from shelf</p>
        <img src={process.env.PUBLIC_URL+"images/shopping_cart.svg"} height="50px" width="50px" />
        <p>I want it!</p>
        </div>
    )})
    
   
  return (
    <div className='book-tiles'>
        {allUserBooks}
    </div>
  )
}
