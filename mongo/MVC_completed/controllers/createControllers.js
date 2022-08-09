const {BookModel} = require('../models/bookModel');

exports.displayCreatePage = (req, res) => res.render('createBooks.ejs');

exports.createBook = (req, res) => {
    console.log(typeof(req.body.isbn));
    let book = new BookModel({
        title: req.body.title,
        author: req.body.author ? req.body.author : undefined,
        isbn: req.body.isbn ? req.body.isbn : undefined
    });

    book.save((err, data)=> {
        if (err) res.render('results.ejs', {message: err.message});
        else res.render('results.ejs', {message: data});
    });
};


//renders the page
// app.get('/create', (req, res)=> res.render('createBooks.ejs'));

//Create
// app.post('/create/book', (req, res) => {
//     console.log(typeof(req.body.isbn));
//     let book = new BookModel({
//         title: req.body.title,
//         author: req.body.author ? req.body.author : undefined,
//         isbn: req.body.isbn ? req.body.isbn : undefined
//     });

//     book.save((err, data)=> {
//         if (err) res.render('results.ejs', {message: err.message});
//         else res.render('results.ejs', {message: data});
//     });
// });
