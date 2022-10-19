import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import NavBar from './NavBar'
import { Navigate } from "react-router-dom"
import StudentQuestion from './StudentQuestion'
import StudentQuote from './StudentQuote'

export default function UserBookLesson({user, setUser}) {
   const params = useParams()
   const [lessonBook, setLessonBook] = useState([])
  const [bookCollection, setBookCollection] = useState([])
  const [discussionQuestion, setDiscussionQuestion] = useState({discussion_question: ""})
  const [allQuestions, setAllQuestions] = useState([])
  
  const [studentQuote, setStudentQuote] = useState({student_quote: ""})
  const [allStudentQuotes, setAllStudentQuotes] = useState([])

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
        setAllQuestions(data.discussion_questions)
        setAllStudentQuotes(data.student_quotes)
        }
      )
    }
  }, [])


function handleFormChange(e){
  setDiscussionQuestion({...discussionQuestion, [e.target.name]: e.target.value})
}

function handleStudentQuoteChange(e){
  setStudentQuote({...studentQuote, [e.target.name]: e.target.value})
}

function handleStudentQuoteSubmit(e){
  e.preventDefault()
  let token = localStorage.getItem('token')
  if(token){
  fetch('/student_quotes', {
    method: 'POST',
    body: JSON.stringify({student_quote: studentQuote.student_quote, user_book_id: lessonBook.id}),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    
  })}
  
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

function handleQuestionDelete(question){
  console.log(question)
  let token = localStorage.getItem('token')
      if(user){
        fetch(`/discussion_questions/${question.id}`, {
        method: "DELETE",
        headers: { 
          'Authorization': `Bearer ${token}`
          }
        })
        updatedQuestions(question)
    }}

function handleQuoteDelete(quote){
  console.log(quote)
  let token = localStorage.getItem('token')
      if(user){
        fetch(`/student_quotes/${quote.id}`, {
        method: "DELETE",
        headers: { 
          'Authorization': `Bearer ${token}`
          }
        })
        updatedQuotes(quote)
    }}

function updatedQuestions(data){
  const rerenderedQuestions = allQuestions.filter((question) => question.id !== data.id);
  setAllQuestions(rerenderedQuestions)
}

function updatedQuotes(data){
  const rerenderedQuotes = allStudentQuotes.filter((quote) => quote.id !== data.id);
  setAllStudentQuotes(rerenderedQuotes)
}

function recentQuestion(id, newquestion){
  const newQuestion = [...allQuestions].filter((question) => question.id !== id)
  newQuestion.filter((question) => question.id !== id)
  newQuestion.unshift(newquestion)
  console.log(newQuestion)
  setAllQuestions(newQuestion)
}

function recentQuote(id, newquote){
  const newQuote = [...allStudentQuotes].filter((quote) => quote.id !== id)
  newQuote.filter((quote) => quote.id !== id)
  newQuote.unshift(newquote)
  console.log(newQuote)
  setAllStudentQuotes(newQuote)
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
      <StudentQuestion question={question} handleQuestionDelete={handleQuestionDelete} lessonBook={lessonBook} recentQuestion={recentQuestion}/>
    )}
    </ul>

    <p>Student Quotes</p>
    <form onChange={handleStudentQuoteChange} onSubmit={handleStudentQuoteSubmit}>
       <input type="text" name="student_quote" value={studentQuote.student_quote}/>
       <button>Add</button>
    </form>
    <ul>
    {allStudentQuotes.map((quote) => 
      <StudentQuote quote={quote} handleQuoteDelete={handleQuoteDelete} lessonBook={lessonBook} recentQuote={recentQuote}/>
    )}
    </ul>

    <p>Student Work</p>
    </div>
  )
}
