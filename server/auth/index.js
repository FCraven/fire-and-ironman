const router = require('express').Router();

//all routes mounted on /auth

router.use('/login', require('./login'))



//404 Error Handler
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
