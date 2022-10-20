import React from 'react'

export default function Footer() {
const year = new Date().getFullYear();

  return (
    <footer style={{backgroundColor: "yellow", padding: "20px"}} className="footer">{`© ${year} Dana Lobell`}</footer>
  )
}
