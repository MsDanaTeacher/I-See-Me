import React from 'react'
import { useParams } from 'react-router-dom'
// import FolloweeBookLesson from './FolloweeBookLesson';

export default function FolloweeBookShelf() {
  const params = useParams();
  
  let token = localStorage.getItem("token");
  if(token){
  fetch(`/followeeinformation/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  return (
    <div>
        {/* <button onClick={handleButtonClick}>back</button> */}
        FolloweeBookShelf
       
    </div> 
  )}