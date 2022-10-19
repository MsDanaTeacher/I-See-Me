import React, { useState } from 'react'

export default function StudentQuestion({question, handleQuestionDelete, lessonBook, recentQuestion}) {
    const [editclicked, setEditClicked] = useState(false)
    const [editedDiscussionQuestion, setEditedDiscussionQuestion] = useState({discussion_question_edited: ""})

    function handleEditClick(){
        setEditClicked(prev => !prev)
      }
      
      function handleEditChange(e){
        setEditedDiscussionQuestion({...editedDiscussionQuestion, [e.target.name]: e.target.value})
        console.log(editedDiscussionQuestion)
      }

      function handleSave(question, editedDiscussionQuestion){
        let token = localStorage.getItem('token')
        if(token){
          fetch(`/discussion_questions/${question.id}`, {
            method: 'PATCH',
            body: JSON.stringify({discussion_question: editedDiscussionQuestion.discussion_question_edited, user_book_id: lessonBook.id}),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
            
          })
        }
        console.log('saved!')
        setEditClicked(prev => !prev)
        recentQuestion(question.id, {discussion_question: editedDiscussionQuestion.discussion_question_edited, user_book_id: lessonBook.id})
      }
  return (
    
        <div>
            {editclicked ? <input type="text" name="discussion_question_edited" value={editedDiscussionQuestion.discussion_question_edited} placeholder={question.discussion_question} onChange={handleEditChange}/>:<li>{question.discussion_question}</li>}
            {editclicked ? <button onClick={() => handleSave(question, editedDiscussionQuestion)}>Save</button> :<button onClick={handleEditClick}>Edit</button>}
            <button onClick={() => handleQuestionDelete(question)}>Delete</button>
        </div>
   
  )
}
