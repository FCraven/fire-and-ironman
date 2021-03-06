const express = require('express');
const app = express();
const db = require('./db/index');
const session = require('express-session');
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({db: db})
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const parseurl = require('parseurl')
const apiRoutes = require('./apiRoutes');
const routes = require('./routes')
const { SESSION_SECRET } = require('../secrets');
const User = require('./db/User')

// Logging Middleware
app.use(morgan('dev'))

// Static Serving Middleware
app.use(express.static(path.join(__dirname, '../public')))

//Body Parsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Session Middleware
dbStore.sync();
app.use(session({
  secret: process.env.SESSION_SECRET || SESSION_SECRET,
  store: dbStore,
  resave: false,
  saveUninitialized: false,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// after we find or create a user, we 'serialize' our user on the session
passport.serializeUser((user, done) => {
  done(null, user.id)
})

//If we've serialized the user on the session with an id, look it up here and attach it as 'req.user'
passport.deserializeUser(async (id,done) => {
  try {
    const user = await User.findByPk(id)
    user.sanitize()
    done(null,user)
  } catch (err) {
    done(err)
  }
})


//store page views per user
app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }
  // get the url pathname
  const pathname = parseurl(req).pathname
  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  next()
})



//All routes below here

//AUTH routes
app.use('/auth', require('./authRoutes'))


// API Routes
app.use('/api', apiRoutes)

app.use(routes)

//If no routes match, send index.html
app.get('*', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

//404 Error Handler
app.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

//500
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || ' Internal Server Error')
})

module.exports = app
