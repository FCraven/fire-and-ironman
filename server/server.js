const express = require('express');
const app = express()
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const apiRoutes = require('./apiRoutes')

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', apiRoutes)

app.get('*', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})
