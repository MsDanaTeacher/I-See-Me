import React from 'react'


export default function BookTiles({books, user}) {

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
}
}


    const bookCollection = books;
    const allBooks = bookCollection.map((book, i) => 
       <div key={i} className="books"><img src={book.image} className='book-tiles-each'/>
        <p className='add-to-library' onClick={() => handleClick(book)}>Add to library</p>
        <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px" className='add-to-library-book-image'/>
        </div>
    );

  return (
    <div className='book-tiles'>
        {allBooks}
    </div>
  )
 }
