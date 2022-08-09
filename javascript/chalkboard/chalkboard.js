
//anonymous functions
(function() {
    console.log("blue");
})

(); //invoking it so it will show up in my console when i open it 

(function() {
    console.log("green");
})

();

(function() {
    console.log("yellow");
})

();

(function(){
    console.log("forest green");
})

();

(function(){
    console.log("navy blue");
})

();


// named function
function animal() {
    console.log("dog");
}

function animal() {
    console.log("turtle");
}

function animal() {
    console.log("cat");
}

function animal() {
    console.log("penguin");
}

function animal() {
    console.log("otter");
}


function cities() {
    console.log("Tokyo");
}

function cities() {
    console.log("Oslo");
}

function cities() {
    console.log("Venice");
}

function cities() {
    console.log("Barcelona");
}

function cities() {
    console.log("Munich");
}

//come back to this one, not sure if I'm doing what is being asked
function favBook(book){
    console.log(book);
}

favBook("The Alchemist"); //invoking it so it will show in the console whren I open it 

function favBook(book){
    console.log(book);
}

favBook("Fried Green Tomatoes at the Whistle Stop Cafe");

function favBook(book){
    console.log(book);
}

favBook("Harry Potter and the Sorcerer's  Stone");

function favBook(book){
    console.log(book);
}

favBook("The Hitchhiker's Guide to the Galaxy");

function favBook(book){
    console.log(book);
}

favBook("The Giver");


//two arguments
function money(num, name) {
    console.log("Hey " + name + ", can I borrow $" + num +" from you?");
}
