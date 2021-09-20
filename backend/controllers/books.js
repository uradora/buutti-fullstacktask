const booksRouter = require('express').Router()
const book = require('./../models/book');
const Book = require('./../models/book')

booksRouter.get('/', async (request, response) => {
  const books = await Book.find({})
  response.json(books.map((book) => book.toJSON()));
})

booksRouter.get('/:id', async (request, response) => {
  const book = await Book.findById(request.params.id)
  .catch(err => {
    response.json({ message: `Error: ${err}` })
  })
  if (book) {
    response.json(book)
  } else {
    response.status(404).end()
  }
})

booksRouter.post('/', async (request, response) => {
  const body = request.body

  console.log(body)
  const newBook = new Book({
    title: body.title,
    author: body.author,
    description: body.description
  })

  const savedBook = await newBook.save()
  .catch(err => {
    return response
    .status(400)
    .json({ message: `Error: ${err}` })
  })
  response.json(savedBook.toJSON())
})

booksRouter.put('/:id', async (request, response) => {
  const body = request.body

  const bookToUpdate = await Book.findById(request.params.id)

  const updateBook = {
    title: body.title || bookToUpdate.title,
    author: body.author || bookToUpdate.author,
    description: body.description || bookToUpdate.description
  }

  const updatedBook = await Book.findByIdAndUpdate(request.params.id, updateBook, {
    new: true,
  })
  .catch(err => {
    return response
    .status(400)
    .json({ message: `Error: ${err}` })
  })
  response.json(updatedBook.toJSON())
})

booksRouter.delete('/:id', async (request, response) => {
  try {
    book = await Book.findByIdAndRemove(request.params.id)
    return response.status(200).json(`Poisto onnistui`)
  } catch (err) {
    return response.json({ message: `Error: ${err}` })
  }
})

module.exports = booksRouter