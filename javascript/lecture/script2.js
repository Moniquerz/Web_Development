// var picsArray = ["assets/chickensoup.jpg", "assets/cheesesoup.jpg", "assets/macaroni.jpg"];
// var index = 1;

// document.querySelector("button").addEventListener("click", function(){
//    var nextImage = picsArray[index]
//    document.querySelector("img").setAttribute("src", nextImage);
//    index++;
//    if(index === picsArray.length){
//        index = 0;
//    }
// });

// document.querySelector("#box").addEventListener("click", function() {
//     if(document.querySelector("#box").checked){
//         document.querySelector("#pic").style.display= "none";
//     } else {
//         document.querySelector("#pic").style.display= "initial";
//     }
// });


// document.querySelector("form").addEventListener("submit", function(event){
//     const errors = [];
    
//     if(document.getElementById("name").value === ""){
//         errors.push("Please enter a name");
//     }

//     if(document.getElementById("password").value.length <= 6){
//         errors.push("Password must be greater than 6 characters");
//     }

//     if(errors.length > 0){
//         event.preventDefault();
//         document.querySelector("#wrapper").style.border = "3px solid red";
//         document.querySelector("p").textContent = errors.join(", ");
//         document.querySelector("p").style.color = "red";
//     }
// });
