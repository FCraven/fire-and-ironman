const router = require('express').Router()

// mounted on  /auth/logout
router.delete('/', (req, res, next) => {
  req.logout()
  req.session.destroy((err) => {
    if (err) return next(err)
    res.status(204).end()
  })
})


module.exports = router
