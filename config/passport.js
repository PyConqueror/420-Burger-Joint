const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./model/user');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== password) { // Direct comparison, not secure
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

