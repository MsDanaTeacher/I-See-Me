import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Navigate, Link } from "react-router-dom";
import UserBookTiles from "./UserBookTiles";
// import UserBookLesson from './UserBookLesson'

export default function Profile({ user, setUser, books }) {
  const [userBookData, setUserBookData] = useState([]);
  // const [linkClicked, setLinkClicked] = useState(false)

  const logout = () => {
    setUser({ username: "" });
    localStorage.removeItem("token");

  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      fetch("/userbooks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setUserBookData(data));
    }
  }, []);

  function handleDeleteBook(book) {
    console.log(book);
    let token = localStorage.getItem("token");
    if (user) {
      fetch(`/deleteuserbook/${book.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // .then(res => res.json())
      // .then(data => {
      //   //use .filter to remove based on id
      updatedBooks(book);
      //   //remove book from userBookData - using setUserBookData
      // })
    }
  }

  function updatedBooks(data) {
    const rerenderedBooks = userBookData.filter((book) => book.id !== data.id);
    setUserBookData(rerenderedBooks);
  }

  return (
    <div>
     <Link to="/"><button onClick={logout} className='logout-button'>Logout</button></Link>
      {user.username.length > 0 ? <NavBar /> : null}
      <h1>{user.username}'s Bookshelf</h1>
      <div className="book-tiles">
        {/* {linkClicked ? <UserBookLesson user={user}/> : <UserBookTiles user={user} userbooks={userBookData} books={books} handleDeleteBook={handleDeleteBook} handleLinkClick={handleLinkClick}/>} */}
        <UserBookTiles
          user={user}
          userbooks={userBookData}
          books={books}
          handleDeleteBook={handleDeleteBook}
        />
      </div>
    </div>
  );
}
