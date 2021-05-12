const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./utils/config')
const booksRouter = require('./controllers/books')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/books', booksRouter)

const PORT = config.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})