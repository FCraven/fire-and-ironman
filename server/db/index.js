const Sequelize = require('sequelize')

const db = new Sequelize( process.env.DATABASE_URL || 'postgres://localhost:5432/fire-and-ironman', {
  logging: false
})


// associations here


module.exports = db
