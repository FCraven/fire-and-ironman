const router = require('express').Router()

// mounted on  /auth/logout
router.get('/', (req, res, next) => {
  res.send('Hello from the logout route')
})


module.exports = router
