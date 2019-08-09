const express = require('express');

const app = express();

const mongoose = require('mongoose');

const MONGOD_URI = 'mongodb://localhost/mtnDream';
mongoose.connect(MONGOD_URI, { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require('path');

const dotENV = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotENV.config({
        path: path.resolve(__dirname, '.env'),
    });
}

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
    app.use(express.static(clientBuildPath));
}

app.use(require('./controllers'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {});
