import React from 'react'
import BannedBooksCarousel from './BannedBooksCarousel'

export default function BannedBooksContainer() {
  return (
    <div className='banned-books-wrapper'>
      <p className='banned-books-title'>Banned Books</p>
      {/* <BannedBooksCarousel /> */}
      <div className='banned-books-container-for-flexing'>
        <div className='each-banned-book'>
          <img src="https://images4.penguinrandomhouse.com/cover/9780399542534" className='each-image'/>
          <div className='each-title-and-author'>
            <h3>Girls Who Code</h3>
            <h6><em>Jo Whittemore</em></h6>
          </div>
        </div>
        <div className='each-banned-book-two'>
        <div className='each-banned-book-two'>
          <img src="https://www.epl.org/wp-content/uploads/2021/09/this-day-in-june.jpg" className='each-image-two'/>
          <div className='each-title-and-author-two'>
            <h3>This Day In June</h3>
            <h6><em>Gayle Pitman</em></h6>
          </div>
        </div>
        </div>
        <div className='each-banned-book-four'>
        <div className='each-banned-book-four'>
          <img src="https://images.squarespace-cdn.com/content/v1/5a2495ad8a02c7c08b0dcc3f/1513476639170-W3KXNQD7TTD2GK4CY56W/DRAMA_cover_shadow.jpg?format=1000w" className='each-image-four'/>
          <div className='each-title-and-author-four'>
            <h3>Drama</h3>
            <h6><em>Raina Telgemeier</em></h6>
          </div>
        </div>
        </div>
        <div className='each-banned-book-three'>
        <div className='each-banned-book-three'>
          <img src="https://www.toddparr.com/wp-content/uploads/2020/07/9780316187107-1.jpg?fit=450%2C450" className='each-image-three'/>
          <div className='each-title-and-author-three'>
            <h3>The Family Book</h3>
            <h6><em>Todd Parr</em></h6>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
