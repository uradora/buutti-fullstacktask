import React, { useState, useEffect } from 'react'
import bookService from './services/books'
import Book from './components/Book'

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    bookService.getAll().then((books) => setBooks(books))
    }, [])

    return (
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        ))}
      </div>
    )
  }

export default App