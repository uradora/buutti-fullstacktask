import React, { useState } from 'react'
import './../styles/app.css'

const Book = ({ book, handleClick }) => {
  return (
      <div onClick={() => handleClick(book)}>
        Nimi: {book.title}
        <br />
        Kirjailija: {book.author}
    </div>
  )
}

export default Book