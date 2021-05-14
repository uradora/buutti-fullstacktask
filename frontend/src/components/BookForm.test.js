import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BookForm from './BookForm'

describe('bookform component', () => {
  let book
  beforeEach(() => {
    book = {
      title: 'Sinuhe egyptiläinen',
      author: 'Mika Waltari',
      description: 'A finnish classic book'
    } 
  })

test('bookform displays book description', () => {
    const component = render(
      <BookForm book={book} />
    )
    expect(component.container).not.toHaveTextContent('A finnish classic book')
})

test('bookform saves a new book', () => {
  const mockHandler = jest.fn()
  const component = render(
    <BookForm 
      book={book} 
      handleAddBook={mockHandler}
    />
  )

  const form = component.container.querySelector("#form")

  fireEvent.submit(form)

  expect(mockHandler.mock.calls.length).toBe(1)
  expect(mockHandler.mock.calls[0][0].title).toBe('Sinuhe egyptiläinen')
  expect(mockHandler.mock.calls[0][0].author).toBe('Mika Waltari')
  expect(mockHandler.mock.calls[0][0].description).toBe('A finnish classic book')

})

})
