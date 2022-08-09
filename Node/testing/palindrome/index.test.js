//pass in a string as an argument
// data type must be a string 
//error handling for non-strings
//character limit 
//case sensitive? 
//can it handle special characters
//what is a palindrome?
//does the function exist 
//how many arguments do we need to pass
//what are some outliers 

//by default, having a test passes 

const {isPalindrome} = require("./index")

describe("Test for palindrome function", ()=> {
    test("isPalindrome function should exist", ()=> {
        expect(isPalindrome()).toBeDefined()
    });
    test("isPalindrome fucntion has only one argument", () => {
      expect(isPalindrome.length).toBe(1)
      //this will test how many arguments are being passed into it
    });
});

describe("Testing for data type", () => {
    test("Should pass with false if number", ()=> {
        expect(isPalindrome(123)).toBe(false);
    });
    test("Should pass with false if boolean", ()=> {
        expect(isPalindrome(true)).toBe(false);
    });
    test("Should pass with false if array", ()=> {
        expect(isPalindrome([])).toBe(false);
    });

});

describe("Testing to see if basic palindrome", () => {
    test("bob is a palindrome and should return true", () => {
        expect(isPalindrome("bob")).toBe(true);    
    });
    test("racecar is a palindrome and should return true", () => {
        expect(isPalindrome("racecar")).toBe(true);    
    });
    test("apple is not a palindrome and should return false", () => {
        expect(isPalindrome("apple")).toBe(false);    
    });
});

