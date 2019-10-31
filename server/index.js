const db = require('./db')
const app = require('./server')
const port = process.env.PORT || 3000;

db.sync()
  .then(
    console.log(`DB ain't gonna lie baby bye bye bye`)
    )
  .then(function () {
    app.listen(port)
    console.log(`Server listening on ${port}`)
  })
