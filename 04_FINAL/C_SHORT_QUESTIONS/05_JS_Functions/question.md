Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

See example below ...

```
    This is a string
    There was string
      ^^^^^^^          <-- 7 differences
```

In the above example, the function should return 7.

Please do not look for solved problems on the web. They are too complicated and you are likely to get into rabbit holes. Think about a string as an array of characters. How would you iterate over them and compare?  What edge conditions should you check for?

Give it a try.



ANSWER:

const myFunc = (string, string2) => {
  //defining variable to add the number of differences
   let diff = 0;
   //iterating over the string
   for(i = 0; i < string.length; i++){
    //if index of string[i] does not match string2[i] add 1 to the difference
      if(string[i] !== string2[i]){
        diff++;
      };
   };
   return diff;
};

console.log(myFunc("This is a string", "There was string"));