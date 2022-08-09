Consider the following code.  What would be console logged?  Why is apple type reported incorrectly?

What would you change to address this issue (the Apple type is mis-represented in the last line below)?

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)


    ANSWER: 
        It's console logging "Apple type is  Clementine". When typing "var orange = apple" you are pointing the variable orange to the apple object. So when typing "orange.type = 'Clementine'" you are changing the value of "type" in the apple object.
        I would make the orange variable an empty object instead of assigning it to the apple variable.
            var orange = {};



Why does this comparison return false?  Please explain.

    var school_a = {name: 'UTexas', place: 'Austin'};
    var school_b = {name: 'UTexas', place: 'Austin'};

    console.log(school_a == school_b);   // returns false, why?


ANSWER: 
    Becuase although the name:values are the same,  the objects are different and are stored in different memory locations. Therefore, not equal.