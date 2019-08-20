const editorController = require('express').Router();
const db = require('../../models/editor/article');

editorController.get('/getList', (req, res) => {
    console.log('getList');
    db.find()
        .limit(10)
        .sort({ date: -1 })
        .then((list) => {
            console.log(list);
            res.json(list);
        });
});

editorController.post('/newSection', (req, res) => {
    const {
        sectionMode,
        title,
        jumbotron,
        body,
    } = req.body;
    switch (sectionMode) {
    case 'title':

        db.findOne({ 'title.text': title.text })
            .then((check) => {
                if (!check) {
                    db.findOneAndUpdate({ 'title.text': title.text }, {
                        title,
                        jumbotron,
                        body: [],
                    }, { useFindAndModify: true, upsert: true, new: true })
                        .then((result) => {
                            res.json(result);
                        });
                } else {
                    res.json({ error: 'An article is already using this Title' });
                }
            });
        break;

    case 'jumbotron':

        db.findOneAndUpdate({ 'title.text': title.text }, { jumbotron }, { useFindAndModify: true, new: true })
            .then(result => res.json(result));
        break;

    case 'currentBody':

        db.findOneAndUpdate({ 'title.text': title.text }, { body }, { useFindAndModify: false, new: true }, (err, newSection) => {
            res.status(200).json(newSection);
        });
        break;

    default:
        break;
    }
});

module.exports = editorController;
