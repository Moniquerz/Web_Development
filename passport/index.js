require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const logger = require('morgan');
app.use(logger('dev'));

require('./services/mongoConnection')();

const UserModel = require('./models/User');
app.use(require('express-session')({
    secret: "Blah blah blah",  // used to encrypt the user info before saving to db
    resave: false,             // save the session obj even if not changed
    saveUninitialized: false   // save the session obj even if not initialized
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
};


app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res)=> {
    res.render('home.ejs')
});

app.get('/newsfeed', isLoggedIn, (req, res)=> {
    res.render('newsfeed.ejs')
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

app.post("/signup", function(req, res) {
    //this next line is storing the object into newUser
    let newUser = new UserModel({username: req.body.username});
    //register is from passport-local-mongoose
    UserModel.register(newUser, req.body.password, function(err, user){
        //if theres an error it will send them back to the signup page
        if(err){
            console.log(err);
            return res.render("signup.ejs")
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/newsfeed");
            });
        }
    })
 });
 
 app.get('/login', (req, res) => {
    res.render('login.ejs');
 });

 app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login'
    }), function(req, res){
        //We dont need anything in our callback function
});

app.get('/logout', (req, res)=>{
    //next line is 
    req.logout();
    res.redirect('/');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));