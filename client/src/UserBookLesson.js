import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"

export default function UserBookLesson({user, setUser}) {
   const params = useParams()
   const [lessonBook, setLessonBook] = useState([])
  const [bookCollection, setBookCollection] = useState([])
  const [discussionQuestion, setDiscussionQuestion] = useState({discussion_question: ""})
  const [allQuestions, setAllQuestions] = useState([])
   const logout = () => {
    setUser({username: ''})
    localStorage.removeItem('token')

}

useEffect(() => {
    let token = localStorage.getItem('token')
    if(token){
      fetch(`/user_books/${params.bookid}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        setBookCollection(data.book_collection)
        setLessonBook(data)
        setAllQuestions(data.discussion_questions)}
      )
    }
  }, [])


function handleFormChange(e){
  setDiscussionQuestion({...discussionQuestion, [e.target.name]: e.target.value})
}

function handleFormSubmit(e){
  e.preventDefault()
  let token = localStorage.getItem('token')
  if(token){
  fetch('/discussion_questions', {
    method: 'POST',
    body: JSON.stringify({discussion_question: discussionQuestion.discussion_question, user_book_id: lessonBook.id}),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    
  })}
}


  return (
    <div>
        <button onClick={logout}>Logout</button>
        {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
        <Link to="/profile">back</Link>     
        <br />
    <img src={bookCollection.image} width="200px" height="200px"/><br />
    <p>Discussion Questions</p>
    <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
       <input type="text" name="discussion_question" value={discussionQuestion.discussion_question}/>
       <button>Add</button>
    </form>
    <ul>
    {allQuestions.map((question) => 
      <li>{question.discussion_question}</li>
    )}
    </ul>
    <p>Student Quotes</p>
    </div>
  )
}
