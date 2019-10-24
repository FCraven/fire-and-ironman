const router = require('express').Router();

//all routes mounted on /auth

router.use('/login', require('./login'))
router.use('/logout', require('./logout'))
router.use('/signup', require('../routes/signup'))
router.use('/me', require('./me'))


//404 Error Handler
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
