const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
    username: String,
    password: String
});

//plugging in something else into mongoose
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', userSchema);