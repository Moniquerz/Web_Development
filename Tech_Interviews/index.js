//for loop iterate through the sentence 
//

let example = "if DOGS cOUld TAlk, it woUlD Take a lOt of fUn out of owNIng one."


const myFunc = sentence => {
    let upper = '';
    let arrSentence = sentence.split(" ");
    for(i=0; i < arrSentence.length; i++){

      upper = arrSentence[i][0].toUpperCase()
    }
    return upper
}

console.log(myFunc(example));