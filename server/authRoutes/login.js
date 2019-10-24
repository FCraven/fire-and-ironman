const router = require('express').Router();
const User = require('../db/User')

router.get('/', (req, res, next) => {
  res.send('Hello from the login route')
})

router.put('/login', async (req, res, next) => {
  try{
    
    const user =  await User.findOne({
        where: {
          email: req.body.email
        }
      })

    if (!user) {
      res.status(401).send('User not found')
    } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password');
    } else {
        req.login(user, err => {
          if (err) {
            next(err)
          } else {
            res.json(user.sanitize())
          };
        });
      }
  } catch(err) {
      next(err)
  };
});



module.exports = router
