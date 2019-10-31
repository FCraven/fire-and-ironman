const router = require('express').Router();
const User = require('../db/User');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../../secrets')


// mounted on /auth/google

// Google authentication and login (GET /auth/google)
router.get('/', passport.authenticate('google', { scope: 'email' }));

// handles the callback after Google has authenticated the user (GET /auth/google/callback)
router.get('/callback',
  passport.authenticate('google', {
    successRedirect: '/home', //where to go on success
    failureRedirect: '/' // or wherever on failure
  })
)

const googleCredentials = {
  clientID: process.env.GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}

const verificationCallback = async (token, refreshToken, profile, done) => {
  const info = {
    name: profile.displayName,
    email: profile.emails[0].value,
    imageUrl: profile.photos ? profile.photos[0].value : undefined
  }

  try {
    const [user] = await User.findOrCreate({
      where: { googleId: profile.id },
      defaults: info
    })
    done(null, user) // the user we pass to done here is piped through passport.serializeUser
  } catch (err) {
    done(err)
  }
}

const strategy = new GoogleStrategy(googleCredentials, verificationCallback)

// configuring the strategy (credentials + verification callback)
// this is used by 'passport.authenticate'
passport.use(strategy)



module.exports = router
