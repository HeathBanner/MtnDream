const editorController = require('../../../node_modules/express').Router();
const db = require('../../../models/editor/article');

const errorCode = { statusCode: 500, message: 'Something went wrong :(' };

editorController.post('/getArticle', async (req, res) => {
    try {
        const { title } = req.body;
        const result = await db.findOne({ 'title.text': title });
        if (!result) {
            return res.json({ statusCode: 401, message: 'Article not found!' });
        }
        res.json(result);
    } catch (error) {
        res.json(errorCode);
    }
});

editorController.get('/getList', async (req, res) => {
    try {
        const result = await db.find().limit(10).sort({ 'date.epoch': -1 });
        if (!result) res.json({ statusCode: 404 });
        res.json(result);
    } catch (error) {
        res.json(errorCode);
    }
});

editorController.post('/newArticle', async (req, res) => {
    try {
        const { title, description, readLength, jumbotron, body, date } = req.body;
        title.isPublished = true;
        const articleCheck = await db.findOne({ 'title.text': title.text });
            
        if (articleCheck) {
            return res.json({
                statusCode: 401,
                error: 'An article is already using this title!',
            });
        }
        const result = await db.updateOne({ 'title.text': title.text }, {
            title,
            description,
            readLength,
            jumbotron,
            body,
            date,
        }, { upsert: true });

        if (!result) return res.json(errorCode);
        res.json({ statusCode: 200, result });
    } catch (error) {
        res.json(errorCode);
    }
});

editorController.post('/saveChanges', async (req, res) => {
    try {
        const { title, description, readLength, jumbotron, body } = req.body;
        const result = await db.findOneAndUpdate({ 'title.text': title.text }, {
            title,
            description,
            readLength,
            jumbotron,
            body,
        });
        if (!result) return res.json(errorCode);

        res.json({ statusCode: 200, result });
    } catch (error) {
        res.json(errorCode);
    }
});

module.exports = editorController;
