const express = require('express');
const connect = require('./connection');
const book = require('./routes/book');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(book);

connect();

app.listen(3000, () => {
    console.log("Server is Running on Port 3000...");
});