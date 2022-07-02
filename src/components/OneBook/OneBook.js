import React from "react";
import "./OneBook.css";

function OneBook() {
  return (
    <div className="one_card">
      <img src="cardBook.png" alt="onebook" />
      <div className="descript_book">
        <p className="category">category</p>
        <p className="title">
          Title of the Book Title of the Book Title of the Book Title of the
          Book Title of the Book Title of the Book Title of the Book
        </p>
        <p className="author">Author's name</p>
      </div>
    </div>
  );
}

export default OneBook;
