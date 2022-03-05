// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');
// const booksData = require("../../books.json");

/* GET home page. wildcard */
router.get('/', (req, res, next) => {

  // console.log(booksData.books);
  // book.insertMany(booksData.books).then(docs => {
  //   console.log("inserted");
  //   console.log(docs);
  // }).catch(err => {
  //   console.log(err);
  // })
    
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
