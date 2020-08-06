const path = require('path')

const dbPath = path.resolve(__dirname, 'db/database.sqlite')

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath
  },
  useNullAsDefault: true
})

knex.schema
  .hasTable('ScoreUserChallenge')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('ScoreUserChallenge', (table) => {
        table.string('id').primary().unique()
        table.string('userId')
        table.string('contestId')
        table.string('challengeId')
        table.integer('score')
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
      })
        .then(() => {
          // Log success message
          // console.log('Table \'ScoreUserChallenge\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
    }
  })
  .then(() => {
    // console.log('done')
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`)
  })

knex.select('*').from('ScoreUserChallenge')
  .then(data => {
    // console.log('data:', data)
  })
  .catch(err => console.log(err))

knex.schema
  .hasTable('User')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('User', (table) => {
        table.string('userId').primary().unique()
        table.string('firstName')
        table.string('lastName')
        table.string('imageUrl')
      })
        .then(() => {
          // console.log('Table \'User\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
    }
  })
  .then(() => {
    // console.log('done')
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`)
  })

knex.select('*').from('User')
  .then(data => {
    // console.log('data:', data)
  })
  .catch(err => console.log(err))

module.exports = knex
