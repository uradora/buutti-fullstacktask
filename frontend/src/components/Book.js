import React, { useState } from 'react'
import { ListItemText } from '@material-ui/core/'
import './../styles/app.css'

const Book = ({ book, handleClick }) => {
  return (
    <div>
      <a href='#' onClick={() => handleClick(book)}>
        <ListItemText primary={`Nimi: ${book.title}`} />
        <ListItemText primary={`Kirjailija: ${book.author}`} />
      </a>
      <br />
    </div>
  )
}

export default Book