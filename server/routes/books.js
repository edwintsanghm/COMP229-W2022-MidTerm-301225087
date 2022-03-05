// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');
/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

    res.render("books/details", {
      title: 'Add a book',
      books: []
    });
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', async (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

     const { title, price, author, genre } = req.body;

     let newBookDoc = new book({Title:title, Price:price, Author:author, Genre:genre})
     await newBookDoc.save();
 
     res.redirect('/books');

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', async (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    const id = req.params.id;

    const bookUpdate = await book.findById(id);

    res.render("books/details", {
      title: 'Add a book',
      books: bookUpdate
    });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', async (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     const { title, price, author, genre }  = req.body;
     const id = req.params.id;
     let newBookDoc = await book.findByIdAndUpdate(id, {Title:title, Price:price, Author:author, Genre:genre})
     res.redirect('/books');
});

// GET - process the delete by user id
router.get('/delete/:id', async (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

     const id = req.params.id;

     await book.findByIdAndDelete(id)
     res.redirect('/books');

});


module.exports = router;
