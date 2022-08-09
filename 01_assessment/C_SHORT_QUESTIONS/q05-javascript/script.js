const numbers={};

function oddEven (num1, num2) {
    for(var i=num1; i<=num2; i++){
        // if(i % 2 === 0) {
        //   numbers[i] ="even";
        // } else {
        //     numbers[i] ="odd";
        // }
        numbers[i] = (i%2 === 0) ? "even" : "odd"
    }

    return numbers;
}

// test
console.log(oddEven(5, 9))

// Great!!! Going forward, see if you can simplify - use more modern efficient code - 
// line 9 can be written as one line of code