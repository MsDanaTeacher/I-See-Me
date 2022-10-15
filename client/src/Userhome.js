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
      <button onClick={logout}>Logout</button>
      {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <h1>Hi, {user.name}</h1>
        <img src="https://images.squarespace-cdn.com/content/v1/5d7baa4b6e56e30ccf013169/1626710980130-1LWGVPTNA9N1K3GWND8N/CR-83.jpg?format=2500w" height="1000px" width="1500px"/>
        <div>
          <p>_____________________</p>
          <p>Teacher Picks</p>
          <div style={{display: "flex"}}>
          <div style={{border: "2px solid blue", padding: "20px", margin: "20px"}}>
            <p>
              “My students loved sharing their special names for their skin tones with each other..caramel honey, milk chocolate with lots 
              of chocolate- we’re all beautiful!”
            </p>
            <p>
              Jane Smith- 2nd Grade Teacher
            </p>
            <img src="https://mpd-biblio-covers.imgix.net/9780805071634.jpg?w=900" width="100px" height="100px"/>
          </div>
          <div style={{border: "2px solid blue", padding: "20px", margin: "20px"}}>
          <p>
            “Pink is for boys, green is for girls...every color is for every gender!”
          </p>
          <p>
            Mr. Tony- 1st Grade Teacher
          </p>
          <img src="https://www.runningpress.com/wp-content/uploads/2021/04/9780762492107-1.jpg?fit=450%2C437" width="100px" height="100px"/>
          </div>
          </div>
        </div>
        <BannedBooksContainer />
        <div style={{border: "2px solid blue", padding: "20px", margin: "20px"}}>
          <p>_____________________</p>
          <p>
            October Collection:Books with Iranian Characters
          </p>
          <div style={{border: "2px solid blue", padding: "20px", margin: "20px", width: "500px"}}>
            <img src="https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9781338150520/primary/renditions/700" width="100px" height="100px"/>
            <img src="https://tinyowl.co.uk/wp-content/uploads/2017/01/WICW-new-coverLR-600x599.jpg" width="100px" height="100px"/>
            <img src="https://minajavaherbin.net/wp-content/uploads/2019/10/secretmessage.jpg" width="100px" height="100px"/>
            <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781328740960_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" width="100px" height="100px"/>
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438813991l/25721005.jpg" width="100px" height="100px"/>
            <img src="https://s39361.pcdn.co/wp-content/uploads/2017/03/9780375714573-persopolis-203x300.jpg" width="100px" height="100px"/>
          </div>
        </div>
    </div>
  )
}
