const picsArray = ["assets/1.jpeg", "assets/2.jpeg","assets/3.jpeg","assets/4.jpeg","assets/5.jpeg","assets/6.jpeg",];

let index = 1;

let newImage;

function nxtImage(x) {
    index += x;
    newImage = `assets/${index}.jpeg`;
    if(index <= picsArray.length) {
        pic.src = newImage;
        return;
    } else {
        index = 1;
        newImage = "assets/" + index + ".jpeg";
        pic.src = newImage;
        return;
    }
}


function prvImage(x) {
    index -= x;
    newImage = `assets/${index}.jpeg`;
    if(index >= 1) {
        pic.src = newImage;
        return;
    } else {
        index = picsArray.length;
        newImage = "assets/" + index + ".jpeg";
        pic.src = newImage;
        return;
    }
}
    