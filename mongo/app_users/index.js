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
 let appSchema = new mongoose.Schema({
    username: String,
    age: Number, 
    favorite_pizza: String, 
    created: {type: Date, default: Date.now},
    member: {type: Boolean, required: [true, "must enter membership status"]}
});


//model
let AppModel = new mongoose.model("customers", appSchema);


// let Customer= new AppModel({
//     username: 'Nancy',
//     age: 22,
//     favorite_pizza: 'pepperoni',
// });


let Customer= new AppModel({
    username: 'Tommy',
    favorite_pizza: 'veggie',
    member: true
});



//create AND save 
// CookieModel.create({
//     type: "Sugar",
//     age: 1.99,
//     tasty: true,
// }, (err, char)=>{
//     if(err)console.log(err)
//     else console.log(char)});


// CREATE
Customer.save((err, char)=> {
    if(err) console.log(`Error saving to database`, err)
    else console.log(`Data saved to database:`, char)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));