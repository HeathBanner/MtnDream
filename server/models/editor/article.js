const mongoose = require('mongoose');

const { Schema } = mongoose;

const titleSchema = new Schema({
    text: String,
    bold: Boolean,
    italic: Boolean,
    underline: Boolean,
    color: String,
    highlight: Boolean,
    font: String,
    justify: String,
    textStyle: String,
});

const sectionSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    font: String,
    justify: String,
    textStyle: String,
    bold: Boolean,
    italic: Boolean,
    underline: Boolean,
    color: String,
    highlight: Boolean,
});

const articleSchema = new Schema({
    title: titleSchema,
    jumbotron: String,
    body: [sectionSchema],
    date: String,
}, { collection: 'Articles' });

const Articles = mongoose.model('Articles', articleSchema, 'Articles');

module.exports = Articles;
