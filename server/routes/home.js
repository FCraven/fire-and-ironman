const router = require('express').Router()

router.get('/', function (req, res, next) {
  res.send('/home route')
});


module.exports = router
