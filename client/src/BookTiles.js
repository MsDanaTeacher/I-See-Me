import React from 'react'
export default function BookTiles({books}) {


    function handleClick(){
    //   fetch('/adduserbooks', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify()
    // })
    // .then(res => res.json())
    console.log('clicked')
    }
    
    const bookCollection = books;
    const allBooks = bookCollection.map((book, i) => 
       <div key={i} className="books"><img src={book.image} height="200px" width="200px"/>
        <p>Add to library</p>
        <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px" onClick={handleClick}/>
        </div>
    );
   
  return (
    <div className='book-tiles'>
        {allBooks}
    </div>
  )
}
