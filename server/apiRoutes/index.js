const router = require('express').Router();

  //  /api/users
router.use('/users', require('./users'))

module.exports = router;
