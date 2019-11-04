const router = require('express').Router();

//all routes mounted on /auth

router.use('/login', require('./login'))
router.use('/logout', require('./logout'))
router.use('/signup', require('./signup'))
router.use('/me', require('./me'))
router.use('/google', require('./google'))

module.exports = router;
