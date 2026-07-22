const Book = require('../models/Book');

async function addBook(req, res) {
    try {
        console.log(req.body);
        let book = new Book(req.body);
        await book.save();
        res.render('addBookSuccess');
    } catch (err) {
        console.log(err);
    }
}

async function getBooks(req, res) {
    try {
        let books = await Book.find({});
        res.render('booklist', {
            books: books
        });
    } catch (err) {
        console.log(err);
    }
}

async function getBookForEdit(req, res) {
    try {
        let id = req.params.id;
        let book = await Book.findOne({ _id: id });

        console.log(book);

        res.render('bookeditpage', {
            book: book
        });
    } catch (err) {
        console.log(err);
    }
}

async function editBook(req, res) {
    try {
        let id = req.params.id;

        console.log(req.body);

        let book = await Book.findOne({ _id: id });

        book.bookName = req.body.bookName;
        book.author = req.body.author;
        book.publisher = req.body.publisher;
        book.category = req.body.category;
        book.publishDate = req.body.publishDate;

        await book.save();

        let books = await Book.find({});

        res.render('booklist', {
            books: books
        });

    } catch (err) {
        console.log(err);
    }
}

async function deleteBook(req, res) {
    try {
        let id = req.params.id;

        await Book.deleteOne({ _id: id });

        let books = await Book.find({});

        res.render('booklist', {
            books: books
        });

    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addBook,
    getBooks,
    getBookForEdit,
    editBook,
    deleteBook
};

