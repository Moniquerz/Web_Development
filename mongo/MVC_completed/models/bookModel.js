const mongoose = require('mongoose');

//Blueprints
  //schema
  const bookSchema = new mongoose.Schema({
    title: {type: String, required : [true, "Must have title"]}, 
    author: {type: String, default: ["Anonymous"]},
    isbn:{type: String, minLength: [10, "ISBN must be at least 10 digits"], maxLength: [13, "ISBN must be less than 13 digits"], required: [true, "Must have an ISBN"]}
    });


    //model
    exports.BookModel = new mongoose.model("books", bookSchema);
