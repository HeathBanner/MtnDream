const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');

// Passport Config
require('./config/passport')(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

app.use(session({
    secret: 'keyboard_cat',
    resave: true,
    saveUninitialized: true,
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

const path = require('path');

const dotENV = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotENV.config({
        path: path.resolve(__dirname, '.env'),
    });
}

const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

const { MONGOD_URI } = process.env;
mongoose.connect(MONGOD_URI, { useNewUrlParser: true });

if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
    app.use(express.static(clientBuildPath));
}

app.use(require('./controllers'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {});
