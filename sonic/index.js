//gives us access to our .env file
require('dotenv').config();

const express = require("express");
const app = express();


//every mongoose app has these 3 parts: Connection, Blueprints, Queries

//Connection 
const mongoose = require("mongoose");
//extract these vaiables in our .env
const {DB, URI} = process.env;

const url = `${URI}/${DB}`;
let connnectionObejct = {
    //next 2 lines allow the all different versions of monogo to talk to eachother
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    user: "acc",
    //CANNOT use "password", mongo will look for "pass"
    pass: "acc_rocks_2020"
};

//telling mongoose to connect using URL and our credentials
mongoose
    .connect(url, connnectionObejct)
    .then(() => {
        console.log(`Connected to the ${DB} database`);
    })
    .catch((err) =>
        console.log(`Issues connecting to the ${DB} database: `, err)
    );


//Blueprints 
    //schemas
    let characterSchema = new mongoose.Schema({
        name: String,
        animal: String, 
        villain: Boolean, 
        age: Number
    });

    // let characterSchema = new mongoose.Schema({
    //     name: String,
    //     animal: String, 
    //     villain: {
    //         type: Boolean,
    //         required: [true, "Nelly said I had to!"]
    //     }, 
    //     age: Number
    // });

    //model
    //use the db connected to mongoose, then first argument is the collection you want to do something with, second argument is the schema that will be used 
    let CharacterModel = new mongoose.model("characters", characterSchema);


//Queries

// let Character = new CharacterModel({
//     name: "Sonic",
//     animal: "hedgehog",
//     villain: false,
//     age: 16
// });

// let Character = new CharacterModel({
//     name: "Knuckles",
//     animal: "echidna",
//     villain: false,
//     age: 18
// });

// let Character = new CharacterModel({
//     name: "Eggman",
//     animal: "human",
//     villain: true,
//     age: 66
// });


//CREATE
// Character.save((err, char)=> {
//     if(err) console.log(`Error saving to database`, err)
//     else console.log(`Data saved to database:`, char)
// });


//this will create AND save 
CharacterModel.create({
    name: "Tails",
    age: 12,
    villain: false,
    animal: "fox"
}, (err, char)=>{
    if(err)console.log(err)
    else console.log(char)});


//READ
CharacterModel.find({}, (err, chars)=> {
    if(err) console.log(`Error reading to database`, err)
    else console.log(`Here are the results of reading from database:`, chars)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));