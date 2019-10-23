const db = require('./db')
const app = require('./server')
const port = process.env.PORT || 3000;

db.sync()
  .then(function() {
    app.listen(port)
    console.log(`Server listening on ${port}`)
  })
