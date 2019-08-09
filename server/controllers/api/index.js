const apiControllers = require('express').Router();

apiControllers.use('/editors', require('./editorController'));
apiControllers.use('/contact', require('./contact'));

module.exports = apiControllers;
