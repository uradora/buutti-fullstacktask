import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Book from './Book'

describe('book component', () => {
  let book
  beforeEach(() => {
    book = {
      title: 'Sinuhe egyptiläinen',
      author: 'Mika Waltari',
      description: 'A finnish classic book'
    } 
  })

test('renders book title and author, not description', () => {
  const mockHandler = jest.fn()
  const component = render(
    <Book book={book} handleClick={mockHandler} />
  )

  expect(component.container).toHaveTextContent('Sinuhe egyptiläinen')
  expect(component.container).toHaveTextContent('Mika Waltari')
  expect(component.container).not.toHaveTextContent('A finnish classic book')
})

test('clicking a book fires event handler', () => {
  const mockHandler = jest.fn()
  const component = render(
    <Book book={book} handleClick={mockHandler} />
  )
  const span = component.container.querySelector('span')
  fireEvent.click(span)
  
  expect(mockHandler.mock.calls).toHaveLength(1)
})

})

