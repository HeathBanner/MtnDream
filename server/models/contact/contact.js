const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
}, { collection: 'Contact' });

const Contact = mongoose.model('Contact', contactSchema, 'Contact');

module.exports = Contact;
