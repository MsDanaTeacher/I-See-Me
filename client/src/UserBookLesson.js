import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { Navigate } from "react-router-dom";
import StudentQuestion from "./StudentQuestion";
import StudentQuote from "./StudentQuote";
import StudentWork from "./StudentWork";

export default function UserBookLesson({ user, setUser }) {
  const params = useParams();
  const [lessonBook, setLessonBook] = useState([]);
  const [bookCollection, setBookCollection] = useState([]);
  const [discussionQuestion, setDiscussionQuestion] = useState({
    discussion_question: "",
  });
  const [allQuestions, setAllQuestions] = useState([]);

  const [studentQuote, setStudentQuote] = useState({ student_quote: "" });
  const [allStudentQuotes, setAllStudentQuotes] = useState([]);

  const [studentWork, setStudentWork] = useState({ student_work: "" });
  const [allStudentWork, setAllStudentWork] = useState([]);

  const logout = () => {
    setUser({ username: "" });
    localStorage.removeItem("token");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      fetch(`/user_books/${params.bookid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setBookCollection(data.book_collection);
          setLessonBook(data);
          setAllQuestions(data.discussion_questions);
          setAllStudentQuotes(data.student_quotes);
          setAllStudentWork(data.student_works);
        });
    }
  }, []);

  function handleFormChange(e) {
    setDiscussionQuestion({
      ...discussionQuestion,
      [e.target.name]: e.target.value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (token) {
      fetch("/discussion_questions", {
        method: "POST",
        body: JSON.stringify({
          discussion_question: discussionQuestion.discussion_question,
          user_book_id: lessonBook.id,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((data) => setAllQuestions([data, ...allQuestions]));
    }
    setDiscussionQuestion({discussion_question: ""})
  }

  function recentQuestion(id, newquestion) {
    const newQuestion = [...allQuestions].filter(
      (question) => question.id !== id
    );
    newQuestion.filter((question) => question.id !== id);
    newQuestion.unshift(newquestion);
    console.log(newQuestion);
    setAllQuestions(newQuestion);
  }

  function handleQuestionDelete(question) {
    console.log(question);
    let token = localStorage.getItem("token");
    if (user) {
      fetch(`/discussion_questions/${question.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      updatedQuestions(question);
    }
  }

  function updatedQuestions(data) {
    const rerenderedQuestions = allQuestions.filter(
      (question) => question.id !== data.id
    );
    setAllQuestions(rerenderedQuestions);
  }

  function handleStudentQuoteChange(e) {
    setStudentQuote({ ...studentQuote, [e.target.name]: e.target.value });
  }

  function handleStudentQuoteSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (token) {
      fetch("/student_quotes", {
        method: "POST",
        body: JSON.stringify({
          student_quote: studentQuote.student_quote,
          user_book_id: lessonBook.id,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => r.json())
      .then((data) => setAllStudentQuotes([data, ...allStudentQuotes]))
    }
    setStudentQuote({ student_quote: "" })
  }

  function recentQuote(id, newquote) {
    const newQuote = [...allStudentQuotes].filter((quote) => quote.id !== id);
    newQuote.filter((quote) => quote.id !== id);
    newQuote.unshift(newquote);
    console.log(newQuote);
    setAllStudentQuotes(newQuote);
  }

  function handleQuoteDelete(quote) {
    console.log(quote);
    let token = localStorage.getItem("token");
    if (user) {
      fetch(`/student_quotes/${quote.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      updatedQuotes(quote);
    }
  }

  function updatedQuotes(data) {
    const rerenderedQuotes = allStudentQuotes.filter(
      (quote) => quote.id !== data.id
    );
    setAllStudentQuotes(rerenderedQuotes);
  }

  function handleStudentWorkChange(e) {
    setStudentWork({ ...studentWork, [e.target.name]: e.target.value });
  }

  function handleStudentWorkSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (token) {
      fetch("/student_works", {
        method: "POST",
        body: JSON.stringify({
          student_work: studentWork.student_work,
          user_book_id: lessonBook.id,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }

  function handleWorkDelete(work) {
    console.log(work);
    let token = localStorage.getItem("token");
    if (user) {
      fetch(`/student_works/${work.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      updatedWorks(work);
    }
  }

  function updatedWorks(data) {
    const rerenderedWorks = allStudentWork.filter(
      (work) => work.id !== data.id
    );
    setAllStudentWork(rerenderedWorks);
  }

  return (
    <div>
      <button onClick={logout} className='logout-button'>Logout</button>
      {user.username.length > 0 ? <NavBar /> : <Navigate to="/" />}
      <div className="user-bookshelf-back"><Link to="/profile"><h3 className="user-bookshelf-back">back</h3></Link></div>
      <br />
      <div className="whole-lesson-wrapper">
        <div className="book-image-and-description">
      <img src={bookCollection.image} className="book-lesson-image"/>
      <p className="book-lesson-description">{bookCollection.description}</p></div>
      <br />
      <div className="questions-and-quotes-divs">
        <div className="questions-quotes-student-work">
      <h5>Discussion Questions</h5>
      
      <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
      <div className="add-discussion-questions-form">
        <input
          type="text"
          name="discussion_question"
          value={discussionQuestion.discussion_question}
          className="lesson-inputs"
        />
        <button className="add-questions-quotes">Add</button>
        </div>
      </form>
      
      <ul>
        {allQuestions.map((question) => (
          <StudentQuestion
            question={question}
            handleQuestionDelete={handleQuestionDelete}
            lessonBook={lessonBook}
            recentQuestion={recentQuestion}
          />
        ))}
      </ul>
      </div>
      <div className="questions-quotes-student-work">
      <h5>Student Quotes</h5>
      <form
        onChange={handleStudentQuoteChange}
        onSubmit={handleStudentQuoteSubmit}
      >
        <div className="add-discussion-questions-form">
        <input
          type="text"
          name="student_quote"
          value={studentQuote.student_quote}
          className="lesson-inputs"
        />
        <button className="add-questions-quotes">Add</button>
        </div>
      </form>
      <ul>
        {allStudentQuotes.map((quote) => (
          <StudentQuote
            quote={quote}
            handleQuoteDelete={handleQuoteDelete}
            lessonBook={lessonBook}
            recentQuote={recentQuote}
          />
        ))}
      </ul>
      </div>
      <div className="questions-quotes-student-work">
      <h5 className="student-work-coming-soon">Student Work Coming Soon!</h5>
      </div>
      </div>
      {/* <form
        onChange={handleStudentWorkChange}
        onSubmit={handleStudentWorkSubmit}
      >
        <input
          type="file"
          name="student_work"
          accept="image/*"
          value={studentWork.student_work}
        />
        <button>Add</button>
      </form>
      {allStudentWork.map((work) => (
        <StudentWork work={work} handleWorkDelete={handleWorkDelete} />
      ))} */}
      </div>
    </div>
  );
}
