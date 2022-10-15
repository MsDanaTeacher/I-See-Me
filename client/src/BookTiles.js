import React from 'react'
export default function BookTiles({bookData}) {
    function handleClick(){
        console.log('clicked')
    }
    
    const bookCollection = bookData;
    const allBooks = bookCollection.map((book, i) => 
       <div key={i} className="books"><img src={book.image} height="200px" width="200px"/>
        <p>Add to library</p>
        <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px" onClick={handleClick}/>
        </div>
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
