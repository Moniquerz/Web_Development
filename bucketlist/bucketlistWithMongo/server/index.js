require('dotenv').config();

const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));

app.use(express.static("../client"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CONNECTION
const mongoose = require("mongoose");
const {DB, URI} = process.env;

//next line creates the endpoint
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


//BLUEPRINTS
  //Schema
  let bucketSchema = new mongoose.Schema({
    description: { type: String, required : [true, "Failed to add a description"],},
    isComplete: {type: Boolean, default: false,},
  });

  //Model
  let BucketModel = new mongoose.model("bucketlist", bucketSchema)

//Querries

  //Create
  //Read
  //Update
  //Delete

app.get("/", (req, res) => {
  res.send("Root route for BucketList Server");
});

// Read - GET
app.get("/bucket", (req, res) => {
  //first argument is empty bracket, second is our callback function (err and whatever you want to call the data)
  BucketModel.find({}, (err, items) =>{
    console.log(items);
    if (err) res.json("There was an error reading data from database");
    else if (items.length === 0) console.log("No data to send");
    else res.status(200).json(items);
  });
});

// Create
app.post("/bucket", (req, res) => {
  let bucketItem = new BucketModel ({
    description: req.body.description,
  });

  bucketItem.save((err, item)=> {
    if(err) res.json("Error saving to database");
    else res.json(item);
  });

});

// Delete
app.delete("/bucket/:id", (req, res) => {
  let requestedId = req.params.id;
  BucketModel.findByIdAndDelete(requestedId, (err, items)=>{
    if (err) res.status(404).send({
      error: "Oops something went wrong",
    });
    else res.json(items);
  });

});


// Update - PUT
app.put("/bucket/:id", (req, res) => {
  let requestedId = req.params.id;
  //grab id and use it as filter, if found it will send that document back(item)
  BucketModel.findById(requestedId, (err, item)=>{
    if (err) res.json("Error finding item in database to update");
    //take the item and find what the isComplete is, then assign it the opposite of what it currently is
    else {
      item.isComplete = !item.isComplete;
      item.save((error, updatedItem)=>{
        if(error) res.json("Error updating item");
        else res.json(updatedItem);
      });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));