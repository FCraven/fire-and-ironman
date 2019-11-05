const router = require('express').Router();
const User = require('../db/User')

router.put('/', async (req, res, next) => {
  // res.send('/auth/login route')
  try {
    console.log(`'auth'login put route-->`, req.body)
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if(!user){
        res.status(401).send('User not found')
    } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password!')
    } else {
        req.login(user, (err) => err ? next(err) : res.json(user.sanitize()))
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router

//Original put route --> fallback if need arises to go back to original
// router.put('/login', async (req, res, next) => {
//   try{

//     const user =  await User.findOne({
//         where: {
//           email: req.body.email
//         }
//       })

//     if (!user) {
//       res.status(401).send('User not found')
//     } else if (!user.correctPassword(req.body.password)) {
//         res.status(401).send('Incorrect password');
//     } else {
//         req.login(user, err => {
//           if (err) {
//             next(err)
//           } else {
//             res.json(user.sanitize())
//           };
//         });
//       }
//   } catch(err) {
//       next(err)
//   };
// });
