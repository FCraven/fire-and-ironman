const router = require('express').Router();

//all routes mounted on /auth

router.use('/login', require('./login'))
<<<<<<< HEAD
router.use('/me', require('./me'))
router.use('/logout', require('./logout'))
=======


>>>>>>> parent of d5d6b21... auth/login auth/logout auth/me hit

//404 Error Handler
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
