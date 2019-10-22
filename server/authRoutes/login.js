const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send('Hello from the login route')
})



module.exports = router
