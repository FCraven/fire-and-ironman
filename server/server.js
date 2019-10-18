const express = require('express');
const app = express()
const session = require('express-session')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const apiRoutes = require('./apiRoutes')
const SESSION_SECRET = require('../secrets')
const sessionConfig = {
  secret: process.env.SESSION_SECRET || SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}

// Logging Middleware
app.use(morgan('dev'))

// Static Serving Middleware
app.use(express.static(path.join(__dirname, '../public')))

//Body Parsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Session Middleware
app.use(session(sessionConfig))

// API Routes
app.use('/api', apiRoutes)

//If no routes match, send index.html
app.get('*', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

//500
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || ' Internal Server Error')
})

module.exports = app
