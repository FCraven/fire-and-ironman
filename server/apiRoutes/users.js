const router = require('express').Router();

// matches GET requests to /api/users/
router.get('/', function (req, res, next) {
  res.send('users get route')
});

router.get('/:userId', function (req, res, next) {
  res.send('userId route')
}))

// matches POST requests to /api/users/
router.post('/', function (req, res, next) {
  res.send('user post route')
});

// matches PUT requests to /api/users/:userId
router.put('/:puppyId', function (req, res, next) {
  res.send('users update route')
});

// matches DELETE requests to /api/users/:userId
router.delete('/:puppyId', function (req, res, next) {
  res.send('delete user route')
});


module.exports = router;
