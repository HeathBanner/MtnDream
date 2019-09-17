const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
    superUser: Boolean,
    username: String,
    email: String,
    password: String,
}, { collection: 'users' });

const Users = mongoose.model('Users', usersSchema, 'Users');

module.exports = Users;
