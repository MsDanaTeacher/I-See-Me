import React, { useState } from 'react'

export default function StudentQuote({quote, lessonBook, recentQuote, handleQuoteDelete}) {
    const [editQuoteClicked, setEditQuoteClicked] = useState(false)
    const [editedQuote, setEditedQuote] = useState({student_quote_edited: ""})

    function handleEditQuoteClick(){
        setEditQuoteClicked(prev => !prev)
      }

    function handleQuoteChange(e){
        setEditedQuote({...editedQuote, [e.target.name]: e.target.value})
        // console.log(editedQuote)
      }

      function handleQuoteSave(quote, editedQuote){
        let token = localStorage.getItem('token')
        if(token){
          fetch(`/student_quotes/${quote.id}`, {
            method: 'PATCH',
            body: JSON.stringify({student_quote: editedQuote.student_quote_edited, user_book_id: lessonBook.id}),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
            
          })
        }
        console.log('saved!')
        setEditQuoteClicked(prev => !prev)
        recentQuote(quote.id, {student_quote: editedQuote.student_quote_edited, user_book_id: lessonBook.id})
      }

  return (
    <div>
        {editQuoteClicked?<input type="text" name="student_quote_edited" value={editedQuote.student_quote_edited} placeholder={quote.student_quote} onChange={handleQuoteChange}/>:<li>{quote.student_quote}</li>}
        
            {editQuoteClicked? <button onClick={() => handleQuoteSave(quote, editedQuote)}>Save</button> :<button onClick={handleEditQuoteClick}>Edit</button>}
            <button onClick={() => handleQuoteDelete(quote)}>Delete</button>
    </div>
  )
}
