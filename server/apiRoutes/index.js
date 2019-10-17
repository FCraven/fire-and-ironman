const router = require('express').Router();

  //  /api/users
router.use('/users', require('./users'))

//404 Error Handler
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
