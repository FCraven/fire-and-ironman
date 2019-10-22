const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send('Hello from the /logout route')
})


module.exports = router
