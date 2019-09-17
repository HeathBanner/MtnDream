const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt');

// Load User Model
const User = require('../models/users/users');

const auth = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            // Match User
            User.findOne({ email })
                .then((user) => {
                    console.log(user);
                    if (!user) {
                        return done(null, false, { message: 'The email is not registered!' });
                    }
                    // Match password
                    return bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        console.log('IS MATCH: ', isMatch);
                        if (isMatch) {
                            return done(null, user);
                        }
                        return done(null, false, { message: 'Password incorrect' });
                    });
                })
                .catch((error) => { console.log(error); });
        }),
    );
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
};

module.exports = auth;
