const apiControllers = require('express').Router();

apiControllers.use('/editors', require('./editorController'));
apiControllers.use('/contact', require('./contact'));
apiControllers.use('/users', require('./Users/users'));

module.exports = apiControllers;
