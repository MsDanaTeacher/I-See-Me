import React from 'react'
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"
import BannedBooksContainer from './BannedBooksContainer'

export default function Userhome({user, setUser}) {
    const logout = () => {
        setUser({username: ''})
        localStorage.removeItem('token')

    }
    
  return (
    <div>
      <button onClick={logout} className='logout-button'>Logout</button>
      {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <h4 className='hello-teacher'>Hi, {user.username}!</h4>
        <div className='text-overlay'>
        <img src="https://images.squarespace-cdn.com/content/v1/5d7baa4b6e56e30ccf013169/1626710980130-1LWGVPTNA9N1K3GWND8N/CR-83.jpg?format=2500w" className='user-home-illustration'/>
        <h1 className='centered'>“To get young people engaged, one of the 
things they need is to see themselves in 
books. It is important for all of us to see 
ourselves in books, because that encourages us to read in a different way
and encourages us to write more.”
      -Dr. Jerrie Cobb Scott</h1>
      </div>
        <div className='teacher-picks-wrapper'>
          <div className='teacher-picks-title-wrapper'>
          <p className='teacher-picks-title-line'>________________</p>
          <h2 className='teacher-picks-title'>Teacher Picks</h2>
          </div>
          <div className='teacher-picks-boxes'>
            <p className='teacher-reviews-one'>
              “My students loved sharing their special names for their skin tones with each other..caramel honey, milk chocolate with lots 
              of chocolate- we’re all beautiful!”<br/>
              -Jane Smith, 2nd Grade Teacher
            </p>
            <img src="https://mpd-biblio-covers.imgix.net/9780805071634.jpg?w=900" className='teacher-book-review-picture-one'/>
          </div>
          <div className='teacher-picks-boxes'>
          <p className='teacher-reviews-two'>
            “Pink is for boys, green is for girls...every color is for every gender!” <br/>
            -Mr. Tony, 1st Grade Teacher
          </p>
          <img src="https://www.runningpress.com/wp-content/uploads/2021/04/9780762492107-1.jpg?fit=450%2C437" className='teacher-book-review-picture-two'/>
          </div>
        </div>



        <BannedBooksContainer />
        <div className='monthly-themed-books'>
          <div className='monthly-boxes-one'>
          <p className='teacher-picks-title-line-theme'>______________________</p>
          <p className='monthly-picks-title'>
            October Collection: Books with Iranian Characters
          </p>
          </div>
          <div className='monthly-boxes-two'>
            <div className='monthly-book-tiles'>
            <img src="https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9781338150520/primary/renditions/700" className='monthly-themed-book-sizing'/>
            <img src="https://tinyowl.co.uk/wp-content/uploads/2017/01/WICW-new-coverLR-600x599.jpg" className='monthly-themed-book-sizing'/>
            <img src="https://minajavaherbin.net/wp-content/uploads/2019/10/secretmessage.jpg" className='monthly-themed-book-sizing'/>
            <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781328740960_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" className='monthly-themed-book-sizing'/>
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438813991l/25721005.jpg" className='monthly-themed-book-sizing'/>
            <img src="https://s39361.pcdn.co/wp-content/uploads/2017/03/9780375714573-persopolis-203x300.jpg" className='monthly-themed-book-sizing'/>
          </div>
          </div>
        </div>
    </div>
  )
}
