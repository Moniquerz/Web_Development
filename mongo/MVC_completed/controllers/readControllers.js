const {BookModel} = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
    BookModel.find({}, (err, bookArray) => {
        if (err) res.render('results.ejs', {message: err.message})
        else res.render('readBooks.ejs', {books: bookArray});
    }) 
 };

