const router = require('express').Router()
const User = require('../db/User')

//mounted on /auth/signup


router.post('/', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (user) {
      // req.login(user, err => {
      //   if (err) next(err);
      //   else res.json(user.sanitize());
      // });

      res.redirect('/auth/login')
      //  res.status(202).send('That email is already being used. \nPlease enter another.')

      // .json(user.sanitize())
    } else {
      const newUser = await User.create(req.body)
      // req.login(newUser, err => {
      //   if (err) next(err);
      //   else res.status(200).json(newUser.sanitize());
      // });
      res.status(200).json(newUser.sanitize())
    }
  } catch (err) {
    next(err)
  }
});




module.exports = router
