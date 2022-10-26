import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
const year = new Date().getFullYear();

  return (
    <>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <div className='text-center p-4' style={{ backgroundColor: '#FFD12F' }}>
        © {year} Dana Lobell <br /> Illustrations owned and created by Christian Robinson
      </div>   
    </MDBFooter>
    
    </>
  )
}
