const path = require('path')

const dbPath = path.resolve(__dirname, 'database.sqlite')

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

knex.schema
  .hasTable('books')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('books', (table)  => {
          table.increments('id').primary()
          table.string('title')
          table.string('author')
          table.string('description')
        })
        .then(() => {
          console.log('Taulu \'Kirjat\' luotu')
        })
        .catch((error) => {
          console.error(`Ei pystytty luomaan taulua: ${error}`)
        })
      }
    })
    .then(() => {
      console.log('Valmis!')
    })
    .catch((error) => {
      console.error(`Virhe: ${error}`)
    })

module.exports = knex