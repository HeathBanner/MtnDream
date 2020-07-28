const usersController = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../../../models/users/users');

usersController.post('/signup', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const result = await User.findOne({ email: newUser.email });
        if (result) {
            return res.status(401).json({
                error: true,
                message: 'This email is already in use!'
            });
        }
        return bcrypt.genSalt(10, (saltError, salt) => {
            bcrypt.hash(newUser.password, salt, async (hashError, hash) => {
                if (hashError) throw hashError;

                newUser.password = hash;
                await newUser.save()
                res.status(201).json({
                    error: false,
                    message: 'Account successfully created!'
                });
            });
        })
        .catch((error) => {
            res.status(500).json({ error: true, message: "Something went wrong :(" });
        });
    } catch (error) {
        res.json({
            error: true,
            message: "Something went wrong :("
        });
    }
});

usersController.post('/login', (req, res, next) => {
    try {
        passport.authenticate('local', (err, user) => {
            if (err) {
                return res.status(500).json({
                    error: true,
                    message: 'Something went wrong :('
                });
            }
            return req.logIn(user, (error) => {
                if (error) {
                    return res.status(500).json({
                        error: true,
                        message: 'Something went wrong :('
                    });
                }
                return res.status(200).json({ error: false, message: 'success' });
            });
        })(req, res, next);
    } catch (error) {
        res.json({
            error: true,
            message: "Something went wrong :("
        });
    }
});

module.exports = usersController;
