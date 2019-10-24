const router = require('express').Router()
const User = require('../db/User')

//mounted on /auth/signup


router.post('/', async (req, res, next) => {
  try{
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
      })

    if(user) {
      res.status(200).json(user.sanitize())
    } else {
      const newUser =  await User.create(req.body)
      res.status(200).json(newUser.sanitize())
    }


    console.log(`User ==--+-->`, user)

    // Bring back when Passport is setup wup to user req.login
    // req.login(newUser, err => {
      //   if (err) next(err);
      //   else res.json(newUser);
      // });
  } catch(err){
      next(err)
  }
});




// router.post('/', async (req, res, next) => {
//   try {
//     const user = await User.findOrCreate({
//       where: {
//         email: req.query.email
//       },
//       defaults: req.query
//     })

//       // req.login(user, err => {
//       //   if(err) {
//       //     next(err)
//       //   } else {
//       //     res.json(user)
//           // .sanitize)(
//       //   }
//       // })
//   } catch (err) {
//       next(err)
//   }
// });

module.exports = router
