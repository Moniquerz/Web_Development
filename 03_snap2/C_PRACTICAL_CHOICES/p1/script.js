// *** Please include your answer below ***
//Write a for loop starting from -10 and goes upto 10 and prints (console.logs) these numbers out, all on the same line(!).  However skip the numbers that are multiples of 3.



//setting up a variable to put the numbers into
let numbers = ""
//first i is the starting number, second is what number it stops at (condition), third increases the number by one everytime the loop runs
for (i = -10; i <= 10; i++) {
    //if i modulus 3 does not equal 0, print 
    if(! (i%3 === 0 ) ){
    //every time it loops it concatnates the number(i) to a string and adds it to the numbers varibale
    numbers += i + " ";
    }
}
console.log(numbers)