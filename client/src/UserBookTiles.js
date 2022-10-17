import React from 'react'

export default function UserBookTiles({user, userbooks}) {
    const userBookCollection = userbooks.filter((book) => book.user_id === user.id);
    
    const allUserBooks = userBookCollection.map((book, i) => {
      console.log(userBookCollection)
    return (
       <div key={i} className="books">
        <p>{book.title}</p>
        <img src={book.image} height="200px" width="200px"/>
        <p>Add to library</p>
        <img src={process.env.PUBLIC_URL+"images/free_icon_1.svg"} height="40px" width="40px" />
        </div>
    )})
    
   
  return (
    <div>
        {allUserBooks}
    </div>
  )
}
