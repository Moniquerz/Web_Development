// Connection
const mongoose = require("mongoose");
const { DB, URI } = process.env;

let url = `${URI}/${DB}`;
let connectionObject = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: "admin",
  user: "acc",
  pass: "acc_rocks_2020",
};

//instead of just making a connection, you put it in a fucntion and assign it to a variable 
const connection = () => {
    mongoose
  .connect(url, connectionObject)
  .then(() => {
    console.log(`Connected to the ${DB} database`);
  })
  .catch((err) => {
    console.log(`Issues connecting to the ${DB} database: `, err)
  });
}

//export connection 
//create a module (an object )then export the connection
module.exports = connection 