const isPalindrome = (text) => {
    if(typeof text !== "string") 
    return false; 
    //1. turn string into an array
    //2. reverse it 
    //3. check to see if same as first array
    let reversedText = text.split("").reverse().join("");
    console.log(reversedText);
    if(text === reversedText)
    return true
    else return false;

};

module.exports = {
    isPalindrome: isPalindrome
}