// var hour = 12;

// if (hour < 12) {
//     console.log("Good morning. Would you like some toast?");
// } else if (hour >= 12 && hour < 17) {
//     console.log("Good afternoon. Time for tea!");
// } else {
//     console.log("Good evening. How about noodles for dinner?");
// }



// var age = 18;
	
// if (age >= 21) {
//     console.log("You can buy alcohol");
// } else {
//     console.log("you are too young!");
// }


// //These are ternary operator examples 
// var age = 18;

// var result = age >= 21 ? 'you can buy alcohol.': 'You are too young';
// console.log(result)


// var time = 15;

// var result = time <= 12 ? 'hola monique' : 'It is too late, goodbye.';
// console.log(result)


// //Quarernary Example 
// var age = 25;

// var result = age < 21 
//     ? 'not old enough'
//     : age > 30 
//         ?'you do not need to be carded'
//         : 'still need to be carded';

// console.log(result)



//while loop 
// var count = 1;

// while(count < 11){
//     console.log("count is " + count);
//     count++;
// }

// var count = 1;
 
// while(count <= 100){
//     console.log("count is " + count);
//     count = count+ 2;
// }

//for loop example
// for (var count = 1; count <= 5; count++){
//     console.log(count);
// }



//for and loop used togther. will print out all odd numbers 1-21
// for(var i = 0; i <= 21; i++){
//     if(i % 2 == 1){
//         console.log(i);
//     }
// }


//functions
// function greetings() {
//     console.log("hey guys, how's it going");
//     console.log("Where's the pary at?");
//     console.log("Did anybody bring spinach dip?");
// }
//     greetings();
    

//function argument examples
// function greetings(name) {
//     console.log("Hey " + name + ", how's it going?")
// }

// greetings("Jennifer");



// function greeting(age) {
//     return "So I understand you're " + age + " years old.";
// }

// console.log(greeting(27));

//  function fullGreeting(age, name) {
//      return "Hi " + name + ", I believe you're " + age + " years old.";
//  }
//  console.log(fullGreeting(27, "Gary") 
//  );

// function area(length, width) {
//    return (length * width);
// }
// var result = area(10, 2);
    

//function expression 
// var hello = function(){
//     console.log("Hi how are you?")
// }

// hello();

// function oddEven (num){
//     if(num % 2 == 0){
//         return "true";
//     } else {
//         return "false";
//     }
// }


//Scope

// console.log(blah); //this will not run because its out of scope. would need to have global scope 


//global scope, visible to anybody
// var blah = "Please give me coffee.";

// function hello(){
//     //this is local scope
//     var blah = "its late at night";
//     console.log(blah);
// }

// hello();
// console.log(blah);
//here we will get both blah vars


//Higher order functions, can set function as an argument
// function hello(){
//     document.write("will you be my friend?")
// }

//1000 milliseconds = 1 second //
// setInterval(hello, 1000);


//anonymous function(function without a name 
// setInterval(
//     function(){
//         document.write("hello");
//     }, 3000
// )

// function userName () {
//     var first = prompt("what is your first name");
//     var last = prompt("what is your last name");
//     return `hello ${first} ${last}`;
// }

// document.write(userName());


//which is the highest number-my solutuion 
// function isHighest(x, y, z) {
//     if(x > y && x > z) {
//         return (x);
//     } else if (y > x && y > z) {
//         return (y);
//     } else (z > y && z >x) 
//         return (z)
// }

// function isHighest(x, y, z) {
//     var maxvalue = 0;

//     if(x > y){
//         maxvalue = x;
//     } else {
//         maxvalue = y
//     }
//     if(z > maxvalue) {
//         maxvalue = z;
//     }
    
//     return maxvalue;
// }


//Arrays

// var num =[1, 2, 3, 4, 5]

// var names = ["Frank", "Monique", "John", "Rocky"];

// var operationGauntlet = ["destroy thanos", true, 1027, null, "quantum realm"];

// var pet = ["moxi", "pickle", "annie"];


//using a for loop over an array
// var numbers = [1, 2, 3, 4, 5];

// for(var i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] * 2;
// }


// //note: "element" is just a placeholder
// pet.forEach(function(element) {
//     console.log(element + " is awesome");
// });


// var numbers = [4, 9, 16, 25];
// var squareRoots = numbers.map(Math.sqrt);

//will return the square roots of numbers




// var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

//this will return all words longer than 6 characters

// var longWords = words.filter(function(thisword){
//     return thisword.length > 6
// });




// var points = [40, 100, 1, 5, 25, 11];

// points.sort(function(a,b) {
//     return a-b}
// );

//this will sort numerically when more than one number starts with the same number. otherwise it will sort like this 1, 100, 11, 25, 40, 5

// var example =[ 'APPLE', 'Apple Cider', 'applesauce', 'apple pie', 'green apples'];

// var test1 = example.map(function(words) {
//     return words.trim();
// }); 

// test1 = test1.map(function(words){
//     return words.toLowerCase();
// });

// test1 = test1.filter(function(words){
//     return words.substr(0, 5) === "apple";
// });

// test1 = test1.sort();

// console.log(test1);


//OBJECTS

// var person = {
//     name: "Walter White",
//     age: 50,
//     family: ["Skylar", "Flynn", "Holly"], // array within the person object
//     city: "Albuquerque",
//     smart: true, // boolean
//     associates: { // associates object inside person object
//       friend: "Jesse",
//        enemy: "Gus"
//     },
//     hobbies: "Cooking"
// }


// document.getElementById('fruit').style.color= "green";

// document.getElementById('fruit').style.border = "10px solid orange";

// document.getElementById('fruit').style.background = "blue";

// document.getElementById('fruit').style.marginTop = "150px";

// document.getElementById('fruit').style.fontSize = "36px";




// var name = "jon";

// if(name == "jon") {
//     document.querySelector("body").style.background = "pink";
// } else {
//     document.querySelector("body").style.background = "brown";
// }


//will change background colors every 3 seconds

// var isOrange = false;

// setInterval(function(){
//     if(isOrange === true){
//         document.querySelector('body').style.background = "orange";
//     } else {
//         document.querySelector('body').style.background = "blue";
//     }
//     isOrange = !isOrange;
// } , 3000);
   

// var isOrange = false;
// var theBody = document.querySelector('body');

// setInterval(function(){
//     if(isOrange === true){
//         theBody.style.background = "orange";
//     } else {
//         theBody.style.background = "blue";
//     }
//     isOrange = !isOrange;
// } , 3000);
   



// document.querySelector("button").addEventListener("click", function(){
//     alert("hello");
// });

// document.querySelector("h1").addEventListener("click", function() {
//     document.querySelector("body").style.background = "yellow";
// });

// document.querySelector("h1").addEventListener("mouseover", function() {
//     document.querySelector("p").textContent = "cheesecake bites";
// });

// let arr = ["Mouse", "House", "Spouse", "Cat", "Hat", "Gnat", "Rat"]








