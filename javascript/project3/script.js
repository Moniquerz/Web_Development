var num = [];

num[0] = parseInt(prompt("Give a number."));
num[1] = parseInt(prompt("Give another number."));
num[2] = parseInt(prompt("Give a number again."));
  
function addNum() {
    var total = 0;
    numLength = num.length;
    for(i=0; i<numLength; i++){
        total = total + num[i];
    }

    document.write(`The sum of all your numbers is ${total}.`);
}

addNum();