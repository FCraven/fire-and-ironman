const router = require('express').Router()

//mounted on /auth/signup

router.get('/', (req, res, next) => {

  // if (!user from req.whatever) {
    //  user.create new user blah blah blah
  // } else {
        // return user already exists!
  // }
  res.send('Hello from the signup route')
})

module.exports = router
