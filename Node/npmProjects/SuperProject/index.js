var marvel = require('marvel-characters');

//this will generate a random marvel character
console.log(marvel());


//this will display the number of characters in the database
console.log(marvel.characters.length);








//note to self: FIX THIS CODE!!!!!!!!!!! needs to show error if it does not exist 

//this will display characters that start with "Man"
const manHeros = marvel.characters.filter(function(word) {
    return word[0] === "M" && word[1] === "a" && word[2] === "n";
});
console.log(manHeros);



//displays Iron Man if it exist, using a fat arrow function
const ironMan = marvel.characters.filter(word => word === 'Iron Man');
console.log(ironMan);


//this displays Batman if it exist 
const batman = marvel.characters.filter(word => word === 'Batman');
console.log(batman);
