const router = require('express').Router()
const passport = require('passport')

// mounted on /auth/google

// Google authentication and login (GET /auth/google)
router.get('/', passport.authenticate('google', { scope: 'email' }));

// handles the callback after Google has authenticated the user (GET /auth/google/callback)
router.get('/callback',
  passport.authenticate('google', {
    successRedirect: '/home', //where to go on success
    failureRedirect: '/' // or wherever on failure
  })
)

module.exports = router
