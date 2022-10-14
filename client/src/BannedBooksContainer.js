import React from 'react'
import BannedBooksCarousel from './BannedBooksCarousel'

export default function BannedBooksContainer() {
  return (
    <div style={{border: "2px solid blue", padding: "20px", margin: "20px", height: "500px"}}>
      BANNED BOOKS
      <BannedBooksCarousel />
    </div>
  )
}
