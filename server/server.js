const express = require('express');
const app = express();
const db = require('./db/index');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({db: db})
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const apiRoutes = require('./apiRoutes');
const SESSION_SECRET = require('../secrets');

// Logging Middleware
app.use(morgan('dev'))

// Static Serving Middleware
app.use(express.static(path.join(__dirname, '../public')))

//Body Parsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET || SESSION_SECRET,
  store: dbStore,
  resave: false,
  saveUninitialized: false,
}));
dbStore.sync();

//All routes below here

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
