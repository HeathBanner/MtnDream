const contactController = require('express').Router();
const db = require('../../models/contact/contact');

contactController.post('/contactMe', (req, res) => {
    const {
        name,
        email,
        phone,
        message,
    } = req.body;
    db.findOneAndUpdate({ email }, {
        name,
        email,
        phone,
        message,
    }, { useFindAndModify: false, new: true, upsert: true })
        .then(result => res.json(result));
});

module.exports = contactController;
