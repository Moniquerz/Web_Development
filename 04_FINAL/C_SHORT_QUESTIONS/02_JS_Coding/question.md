## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```

    ANSWER:
        It sorts the array from smallest to largest number. 
        To reverse the order-
            points.sort(function(roo,raa){return raa-roo});

## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console
    
   
    ANSWER: 
        This code is trying to use the variable pi before it is defined. 
        To fix it, define the variable before using it.

        (function myFn(radius){
        const pi = 3.1415926;
        var boundary = Math.pow(radius, 2) * pi;
        if(boundary) console.log('boundary is ', boundary);
        }(20))

        Using var instead of const would not fix it because they both define variables and scope is not the issue here. It would not change the outcome of this function.