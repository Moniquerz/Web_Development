const express = require("express");
const app = express();
const logger = require('morgan');
app.use(logger('dev'));

//looks inside client folder then by default looks for index.html
app.use(express.static('../client'));

//if client sends data to server as JSON, this will be used 
app.use(express.json());
//if client sends data to server urlencoded, this will be used 
app.use(express.urlencoded({extended: false}));

//importing our array
const {bucketArray} = require('./fakeData');

app.get('/', (req, res)=>{
    res.send("Server response");
});

// Read - GET
app.get('/bucket', (req, res) => {
    res.json(bucketArray);
});

//Create - POST
let newID = 4;
app.post('/bucket', (req, res) => {
    let tempItem = {
        id: newID++, 
        description: req.body.description, 
        isComplete: false
    }
    bucketArray.push(tempItem);
    //this next line ends it and sends tempItem
    res.json(tempItem);
});

//Delete -DELETE
app.delete('/bucket/:id', (req, res) => {
    //client selected their item (req.params.id), assigning it to requestedId variable
    let requestedId = Number(req.params.id);
    //here we are using the findIndex method to iterate through the array and see if any of the ids match the requestedId, then assigning it to requestedItemIndexVariable
    let requestedItemIndex = bucketArray.findIndex(bucketItem => {
        return bucketItem.id === requestedId;
    });
    //deleting the element if it is found
    if (requestedItemIndex !== -1) {
        bucketArray.splice(requestedItemIndex, 1);
        res.json(bucketArray);
    } else {
      res.status(404).send({
        error: "Opps something went wrong",
      });
    }
   
});


// Update - PUT
app.put("/bucket/:id", (req, res) => {
    let requestedId = Number(req.params.id);
    // bucketArray -> data type = array of objects
    let bucketItem = bucketArray.find((item) => {
      // if successful, we return the element which is an object
      // get assigned to bucketItem which is now an object
      // if NOT successful, undefined
      return requestedId === item.id;
    });
    // if undefined, bucketItem is false
    // else it exists and considered true
    if(bucketItem){
      bucketItem.isComplete = !bucketItem.isComplete;
      res.json(bucketItem)
    } else {
      res.status(404).send({message: "Id does not exit"})
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));