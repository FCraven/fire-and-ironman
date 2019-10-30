const router = require('express').Router()

// mounted on /auth/me

router.get('/', (req, res, next) => {
  res.send('Hello from the google route')
})

module.exports = router
