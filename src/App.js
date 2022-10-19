import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, Router, link} from "react-router-dom";

import Backbone from "./components-pieces/Backbone";
import * as BooksAPI from "./BooksAPI";
import Main from "./components-pieces/Main";
import ListBooks from "./components-pieces/ListBooks";
const App = () => {
  const [bookShelves, setBookShelves] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBookShelves(res);
    };
    getBooks();
  }, []);
  console.log(bookShelves)
  
//  useEffect(() => {
//   setBookShelves(initialBooks)

//  },[])
  // search functionality
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  const clearQuery = () => {
    updateQuery("");
  };

  const showingBooks =
    query === ""
      ? bookShelves
      : bookShelves.filter((c) =>
          c.title.toLowerCase().includes(query.toLowerCase())
        );
  // .then((books) =>{
  //   return books.filter((c) =>
  //     c.title.toLowerCase().search(query.toLowerCase())
  //   );
  // })

  // create Book
  const createBook = (book, state) => {
    const createdBook = bookShelves.map((b) => {
      if (b.id === book.id) {
        book.shelf = state;
        return book;
      } 
        return b;
      
    });
    setBookShelves(createdBook);
    BooksAPI.update(book, state);
  };
console.log(bookShelves)
  return (
  <Routes>
    <Route path="/" element={
     <Main bookShelves={bookShelves} createBook={createBook}/>
    } />
      <Route exact path="/list"  element={
        <ListBooks query={query} showingBooks={showingBooks} setQuery={setQuery} bookShelves={bookShelves} createBook={createBook} />
      }/>

            </Routes>

 
  );
};

export default App;
