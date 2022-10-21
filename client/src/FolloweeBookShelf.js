import React from 'react'

export default function FolloweeBookShelf({followeeBookshelf, setFolloweeBookshelf, followee}) {
    function handleButtonClick(){
        setFolloweeBookshelf(prev => !prev)
    }
    const followeeBooks = followee.book_collections
    
  return (
    <div>
        <button onClick={handleButtonClick}>back</button>
        FolloweeBookShelf
        <div className='book-tiles'>
        {followeeBooks.map((el, i) => {
            return (
                <div key={i} className="followee-books">
                   <p>{el.title}</p>
                   <p>View lesson!</p>
                   <img src={el.image} height="200px" width="200px"/><br />
                </div>
            )
        })}
        </div>
    </div>
  )
}
