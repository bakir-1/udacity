import React, { useEffect } from "react";

const Book = ({book, createBook}) => {
  
  //  const thumpnailBooks = book =() =>{
  //   if (!book.imageLinks) {
  //     const ahmed = book.filter((book) => book.imageLinks.smallThumbnail)
  //     return ahmed
  //   }
  //   return
  //  }

  const allBooks = []
  useEffect(() =>{
    allBooks.push(book)

  }, [book])

  //  console.log(thumpnailBooks(), 'ahmed')
  //  console.log(thumpnailBooks, 'BDELAS')
   
  return (
    <div className="book">
    <div className="book-top">
      
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 188,
          background:
          `url(${book.imageLinks?book.imageLinks.smallThumbnail: '' })`
        }}
      ></div>
      <div className="book-shelf-changer">
        <select defaultValue={book.shelf ? book.shelf: "none"} onChange={(e)=> createBook(book, e.target.value)} >
          <option value="Move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    {/* maping the authors so that the text dont overlap */}
    <div className="book-authors">{book.authors}</div> 
    </div>
  )
}
export default Book
