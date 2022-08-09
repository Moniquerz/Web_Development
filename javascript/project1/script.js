function greeting(){
    var name = prompt("What is your name?");
    var snack = prompt("What is your favorite snack?");
    var drink = prompt("What is your favorite drink?");
    return "Hi there " + name + ", it seems that you enjoy eating " + snack + " and drinking " + drink + "!"
}

document.write(greeting());