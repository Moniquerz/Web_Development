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
 let characterSchema = new mongoose.Schema({
    alias: { type: String, required: [true, "Alias name is required"]}, 
    fname: String, 
    lname: String,
    nemesis: String, 
    hero: {type: Boolean, default: true},
    createdOn: { type: Date, default: Date.now},
    alive : { type: Boolean, default: true},
});


//model
let CharacterModel = new mongoose.model("Character", characterSchema);


let Character= new CharacterModel({
    alias: 'Spider-man',
    fname: 'Peter',
    lname: 'Parker',
    nemesis: 'Green Goblin',
});


// CREATE
Character.save((err, char)=> {
    if(err) console.log(`Error saving to database`, err)
    else console.log(`Data saved to database:`, char)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));