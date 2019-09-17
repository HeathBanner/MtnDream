const usersController = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../../../models/users/users');

usersController.post('/signup', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    User.findOne({ email: newUser.email })
        .then((verify) => {
            if (verify) { return res.status(401).json({ error: true, message: 'This email is already in use!' }); }
            return bcrypt.genSalt(10, (saltError, salt) => {
                bcrypt.hash(newUser.password, salt, (hashError, hash) => {
                    if (hashError) throw hashError;
                    newUser.password = hash;
                    newUser.save()
                        .then(() => {
                            res.status(201).json({ error: false, message: 'Account successfully created!' });
                        })
                        .catch((error) => {
                            res.status(500).json({ error: true, message: error });
                        });
                });
            });
        })
        .catch((error) => { res.status(500).json({ error: true, message: error }); });
});

usersController.post('/login', (req, res, next) => {
    console.log('LOGIN');
    passport.authenticate('local', (err, user) => {
        if (err) { return res.status(500).json({ error: true, message: 'Something went wrong :(' }); }
        return req.logIn(user, (error) => {
            if (error) { return res.status(500).json({ error: true, message: 'Something went wrong :(' }); }
            return res.status(200).json({ error: false, message: 'success' });
        });
    })(req, res, next);
});

module.exports = usersController;
