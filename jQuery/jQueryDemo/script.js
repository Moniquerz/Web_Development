// $(document).readyState(alert("Connected!!"))
$("h1").text("I am the header")
$("h1").last().text("I am the last header")
$("h1").eq(2).text("I am the last header (eq)")
let result = $("h1").eq(1).text();
console.log(result);



// function change(){
//     $("h1").eq(1).text("I am a dog")
// }
//setTimeout(change,3000);



// fat arrow function 
// let change = () => $("h1").eq(1).text("I am a dog");
// setTimeout(change,3000);



// let someStyle = {
//     backgroundColor: "orange",
//     fontSize: "48px",
//     border: "4px solid green"
// }

// $("h1").eq(1).css(someStyle).text(someText);