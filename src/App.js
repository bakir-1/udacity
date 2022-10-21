import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, Router, link } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import Main from "./components-pieces/Main";
import ListBooks from "./components-pieces/ListBooks";
const App = () => {
  const [bookShelves, setBookShelves] = useState([]);

 

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBookShelves(res);
      setmapOfId(createBookMapOfBooks(res));
    };
    getBooks();
  }, []);
  const createBookMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };
 
  // search functionality
  const [query, setQuery] = useState("");
  const [showingBooks, setShowingBooks] = useState([]);
  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  const clearQuery = () => {
    updateQuery("");
  };

  useEffect(() => {
    let active = true;
    if (query) {
      BooksAPI.search(query).then((data) => {
        if (data.error) {
          setShowingBooks([]);
        } else {
          if (active) {
            setShowingBooks(data);
          }
        }
      });
      return () => {
        active = false;
        setShowingBooks([]);
      };
    }
  }, [query]);

  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapOfId, setmapOfId] = useState(new Map());

  useEffect(() => {
    const combined = showingBooks.map((book) => {
      if (mapOfId.has(book.id)) {
        return mapOfId.get(book.id);
      } else {
        return book;
      }
    });
    setMergedBooks(combined);
  }, [showingBooks]);

  console.log(mergedBooks, "mergedBooks");
  console.log(showingBooks, "showingBooks")
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
  // console.log(bookShelves);
  return (
    <Routes>
      <Route
        path="/"
        element={<Main bookShelves={bookShelves} createBook={createBook} />}
      />
      <Route
        exact
        path="/search"
        element={
          <ListBooks
            query={query}
            showingBooks={mergedBooks}
            setQuery={setQuery}
            bookShelves={bookShelves}
            createBook={createBook}
          />
        }
      />
    </Routes>
  );
};

export default App;
