const router = require('express').Router()

// mounted on /auth/me
router.get('/', (req, res, next) => {
  res.json(req.user || {})
})

module.exports = router
