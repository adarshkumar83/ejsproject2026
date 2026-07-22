const express = require('express');
const BookController = require('../controllers/BookController');

const route = express.Router();

route.use(express.urlencoded({ extended: false }));

route.get('/', (req, res) => {
    res.render('home');
});

route.post('/add/book', (req, res) => {
    BookController.addBook(req, res);
});

route.get('/books', (req, res) => {
    BookController.getBooks(req, res);
});

route.get('/book/edit/page/:id', (req, res) => {
    BookController.getBookForEdit(req, res);
});
route.post('/edit/book/:id', (req, res) => {
    BookController.editBook(req, res)
});
route.get('/book/delete/:id', (req, res) => {
    BookController.deleteBook(req, res)
})

module.exports = route;