function greeting(){
    var name = prompt("Tell me your name?");
    return "You are going to have a wonderful day, " + name + ". "
}

document.write(greeting());

function numbers(){
    var num1 = Number(prompt("Give me a number."));
    var num2= Number(prompt("Give me another number."));
    return "By the way, the sum of your numbers is " + (num1 + num2) + "."
}

document.write(numbers());

