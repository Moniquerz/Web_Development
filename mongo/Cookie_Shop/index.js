require('dotenv').config();

const express = require("express");
const app = express();


//Connection 
const mongoose = require("mongoose");

const {DB, URI} = process.env;

const url = `${URI}/${DB}`;
let connnectionObejct = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    user: "acc",
    pass: "acc_rocks_2020"
};

mongoose
    .connect(url, connnectionObejct)
    .then(() => {
        console.log(`Connected to the ${DB} database`);
    })
    .catch((err) =>
        console.log(`Issues connecting to the ${DB} database: `, err)
    );


//schema
 let cookieSchema = new mongoose.Schema({
    type: String,
    price: Number, 
    tasty: Boolean, 
});

//model
let CookieModel = new mongoose.model("cookie", cookieSchema);


// let Cookie= new CookieModel({
//     type: "Chocolate chip",
//     price: 1.99,
//     tasty: true,
// });

// let Cookie= new CookieModel({
//     type: "Oatmeal Raisin",
//     price: 2.49,
//     tasty: false,
// });


//create AND save 
CookieModel.create({
    type: "Sugar",
    age: 1.99,
    tasty: true,
}, (err, char)=>{
    if(err)console.log(err)
    else console.log(char)});


// CREATE
// Cookie.save((err, char)=> {
//     if(err) console.log(`Error saving to database`, err)
//     else console.log(`Data saved to database:`, char)
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));