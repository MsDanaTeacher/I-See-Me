import React, { useState } from 'react'


export default function BookTiles({books, user, onAddToLibrary}) {
const [description, setDescription] = useState("")

function handleClick(book){

  let token = localStorage.getItem('token')
  if(user){
    fetch('/newuserbook', {
      method: 'POST',
      body: JSON.stringify({book_collection_id: book.id}),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  alert('book added!')
  console.log(book)
}
onAddToLibrary(book)
console.log(books)
}



function showBookDescription(book){
  setDescription(book.id)
}

    // const bookCollection = books;
    // const allBooks = books.map((book, i) => 
    //    <div key={i} className="books">{book.id === description ? <p className='book-tiles-each-description' onMouseLeave={() => setDescription("")}>{book.description}</p>:<img src={book.image} className='book-tiles-each' onMouseOver={() => showBookDescription(book)}/>}
    //     <p className='add-to-library' onClick={() => handleClick(book)}>Add to library</p>
    //     <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px" className='add-to-library-book-image'/>
    //     </div>
    // );

    
  return (
    <div className='book-tiles'>
        {books.map((book, i) => 
       <div key={i} className="books">{book.id === description ? <p className='book-tiles-each-description' onMouseLeave={() => setDescription("")}>{book.description}</p>:<img src={book.image} className='book-tiles-each' onMouseOver={() => showBookDescription(book)}/>}
        <p className='add-to-library' onClick={() => handleClick(book)}>Add to library</p>
        <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px" className='add-to-library-book-image'/>
        </div>
    )}
    </div>
  )
 }
