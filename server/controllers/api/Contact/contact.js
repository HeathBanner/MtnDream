const contactController = require('express').Router();
const db = require('../../../models/contact/contact');

contactController.post('/contactMe', async (request, response) => {
    try {
        const { name, email, phone, message } = request.body;
    
        const result = await db.findOneAndUpdate({ email }, {
            name,
            email,
            phone,
            message,
        }, { useFindAndModify: false, new: true, upsert: true });
        if (!result) {
            return response.json({
                statusCode: 500,
                message: 'Something went wrong :('
            });
        }
    
        response.json({
            statusCode: 201,
            message: 'Contact has been saved!'
        });
    } catch (error) {
        response.json({
            statusCode: 500,
            message: 'Something went wrong :('
        });
    }
});

module.exports = contactController;
