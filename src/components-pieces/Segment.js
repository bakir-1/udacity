import React from "react";
import Book from "./Book";
const Segment = ({book, title, createBook}) => {
    return (
    <div className="bookshelf" >
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  { book.map((book, index)=> (
                            <Book key={index} book={book} createBook={createBook}/>

                  ))
                  }
                  </ol>
                </div>
              </div>
    )
}
export default Segment