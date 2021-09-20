import React from 'react'
import './../styles/app.css'


const Book = ({ book, handleClick }) => {
  return (
    <div>
      <a className='item' href='#' onClick={() => handleClick(book)}>
        {book.title}
      </a>
    </div>
  )
}

export default Book