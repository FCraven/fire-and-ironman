const Sequelize = require('sequelize')
const db = require('./index')

const Recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING,

  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.ENUM)
  },
  steps: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Recipe
