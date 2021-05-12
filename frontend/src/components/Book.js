import React, { useState } from 'react'
import bookService from './../services/books'

const Book = ({ book }) => {
  return (
    <div>
      {book.title}
      <br />
      {book.author}
      <br />
      {book.description}
    </div>
  )
}

export default Book