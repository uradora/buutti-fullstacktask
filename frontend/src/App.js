import React, { useState, useEffect } from 'react'
import bookService from './services/books'
import Book from './components/Book'
import BookForm from './components/BookForm'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [newBook, setNewBook] = useState(
    {
      title: '',
      author: '',
      description: ''
    }
  )

  useEffect(() => {
    bookService.getAll().then((books) => setBooks(books))
    }, [])

  const handleAddBook = (book) => {

    const newBook = {
      'title': book.title,
      'author': book.author,
      'description': book.description
    }

    bookService
      .addBook(newBook)
      .then((returnedBook) => {
        console.log(returnedBook)
        setBooks(books.concat(returnedBook))
        setNewBook = {
          title: '',
          author: '',
          description: ''
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
  }

  const handleClick = (book) => {
    setNewBook({
      title: book.title,
      author: book.author,
      description: book.description
    })
  }

  const handleChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value })
  }  

  return (
    <div className='wrapper'>
      <div className='list'>
        {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              handleClick={handleClick}
            />
        ))}
      </div>
      <div className='form'>
        <BookForm book={newBook} 
          handleAddBook={handleAddBook} 
          handleChange={handleChange}
        />
      </div>
    </div>
    )
  }

export default App