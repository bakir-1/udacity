import { Link } from "react-router-dom"
import Book from "./Book"
const ListBooks=({showingBooks, setQuery, bookShelves, createBook, query}) => {
   return (
    <div>
    <div className="search-books">
       <div className="search-books-bar">
      <Link
        className="close-search" to ="/"
      
        Close
      />
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
    
      {showingBooks?.map((book, index) =>(
        <Book key={index} book={book} createBook={createBook} />
      ))}
      </ol>
    </div>
  </div>
 </div>
   )
}
export default ListBooks