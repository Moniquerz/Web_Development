const picsArray = ["assets/background1.jpeg", "assets/background2.jpeg", "assets/background3.jpeg"];

var index = 0;

function rotatePic(){
    document.getElementById("bgImage").setAttribute("style", "background-image: url(" + picsArray[index] + ")");
    index++;
    if(index >= picsArray.length){
        index = 0;
    }
}

setInterval(rotatePic, 3000);

