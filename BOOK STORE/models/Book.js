const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookSchema = new Schema({
    bookName: {type: String, required: true},
    author: {type: String, required: true},
    publisher: {type: String, required: true},
    category: {type: String, required: true},
    publishDate: {type: String, required: true},
})
module.exports = mongoose.model('Book', BookSchema);