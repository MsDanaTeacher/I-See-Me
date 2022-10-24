import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useParams } from 'react-router-dom'
export default function FolloweeBookLesson({user}) {

    const params = useParams();
    const [bookImage, setBookImage] = useState("")
    const [discussionquestions, setDiscussionQuestions] = useState([])
    const [studentQuotes, setStudentQuotes] = useState([])

    useEffect(() => {
        let token = localStorage.getItem("token");
        if(token){
        fetch(`/user_books/${params.id}/${params.bookid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setBookImage(data.book_collection.image)
            setDiscussionQuestions(data.discussion_questions)
            setStudentQuotes(data.student_quotes)
          })
        }
        }, [])

        
const allDiscussionQuestions = discussionquestions.map((q, i) => {
    return (
        <div key={i}>
            <li>{q.discussion_question}</li>
        </div>
    )
})

const allStudentQuotes = studentQuotes.map((quote, i) => {
    return (
        <div key={i}>
            <li>{quote.student_quote}</li>
        </div>
    )
})

  return (
    <div className='followee-book-lesson-top-of-page-spacing'>
        {user.username.length > 0 ? <NavBar /> : null}
        <div className="user-bookshelf-back"><Link to="/community"><h3 className="user-bookshelf-back">back</h3></Link></div>
        <br />
        <div className="whole-lesson-wrapper">
        <img src={bookImage} className="followee-book-lesson-image"/><br />
        <div className='followee-questions-quotes-wrapper'>
          <div className='followee-questions'>
        <h5>Discussion Questions</h5>
        <ul>
            {allDiscussionQuestions}
        </ul>
        </div>
        <div className='followee-quotes'>
        <h5>Student Quotes</h5>
        <ul>
            {allStudentQuotes}
        </ul>
        </div>
       {/* <div className="questions-quotes-student-work">
      <h5 className="followee-student-work-coming-soon">Student Work Coming Soon!</h5>
      </div> */}
        </div>
        </div>
        
    </div>
  )
}
