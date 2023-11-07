const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');

passport.use(new LocalStrategy(
  async function(username, password, done) {
      try {
          const user = await User.findOne({ username: username });
          if (!user) {
              return done(null, false, { error: 'Incorrect username.' });
          }
          if (user.password !== password) {
              return done(null, false, { error: 'Incorrect password.' });
          }
          return done(null, user);
      } catch (err) {
          return done(err);
      }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
  User.findById(id).then(function(user) {
    done(null, user);
  });
});