import React from 'react'

export default function BookTiles({bookData}) {
    
    const bookCollection = bookData;
    const allBooks = bookCollection.map((book, i) => 
       <div key={i} className="books"><img src={book.image} height="200px" width="200px"/>
        <p>Add to library</p></div>
    );
    // {bookCollection.map((book, i) => {
    //     return (
    //         <div key={i}>
    //             <img src={book.image} height="100px" width="100px"/>
    //         </div>
    //     )
    // })}
  return (
    <div className='book-tiles'>
        {allBooks}
    </div>
  )
}
