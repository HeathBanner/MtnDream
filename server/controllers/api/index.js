const apiControllers = require('express').Router();

apiControllers.use('/editors', require('./Editor/editorController'));
apiControllers.use('/contact', require('./Contact/contact'));
apiControllers.use('/users', require('./Users/users'));

module.exports = apiControllers;
