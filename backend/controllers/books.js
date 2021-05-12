const knex = require('./../db/db.js')
const booksRouter = require('express').Router()

booksRouter.get('/', async (request, response) => {
  knex
  .select('*')
  .from('books')
    .then(bookData => {
      response.json(bookData)
    })
    .catch(err => {
      response.json({ message: `Virhe: ${err}` })
    })
})

booksRouter.get('/:id', async (request, response) => {
  knex('books')
    .where('id', request.params.id)  
    .then((book) => {
      if (book) {
        response.json(book)
      } else {
        response.status(404).end()
      }})
    .catch(err => {
      response.json({ message: `Virhe: ${err}` })
    })
})

booksRouter.post('/', async (request, response) => {
  const body = request.body

  const newBook = {
    'title': body.title,
    'author': body.author,
    'description': body.description
  }
  
  knex('books')
    .insert(newBook)
    .then(() => {
      response.json(`Kirjan nimeltä ${body.title} lisääminen onnistui`)
    })
    .catch(err => {
      return response
      .status(400)
      .json({ message: `Virhe: ${err}` })
    })
})

booksRouter.put('/:id', async (request, response) => {
  const body = request.body

  const updated = await knex
    ('books')
    .where('id', request.params.id)
    .update(body)

  if (updated) {
    return response.status(200).json(`Päivitetty: ${updated}`)
  } else {
    return response.status(404).json(`Päivitettävää ei löytynyt`)
  }
})

booksRouter.delete('/:id', async (request, response) => {
  knex('books')
    .where('id', request.params.id)  
    .del()
    .then(message => {
      if (message === 1) {
        return response.status(200).json(`Poisto onnistui`)
      } else {
        return response.status(404).json(`Poisto ei onnistunut`)
      }
    })
    .catch(err => {
      response.json({ message: `Virhe: ${err}` })
    })
})

module.exports = booksRouter