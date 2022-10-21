import React, { useEffect, useState } from 'react'
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
    <div>
        {user.username.length > 0 ? <NavBar /> : null}
        <img src={bookImage} height="200px" width="200px"/><br />
        <p>Discussion Questions</p>
        <ul>
            {allDiscussionQuestions}
        </ul>
        <p>Student Quotes</p>
        <ul>
            {allStudentQuotes}
        </ul>
    </div>
  )
}
