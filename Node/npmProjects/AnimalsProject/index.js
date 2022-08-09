const Log = require('log.pets');
const animals = require('animals');
const randomAnimal = animals();


//displays a random animal console
console.log(randomAnimal);

//dislays lion in cosole
Log.lion();


//displays animals names on the zoo sign
const randomAnimal2 = animals();
const randomAnimal3 = animals();
Log.zoo(randomAnimal, randomAnimal2, randomAnimal3);

//displays number of animals in the animal generator 
console.log(`# of animals in gerator: ${animals.words.length}`);




/////note to self: FIX THIS CODE!!!!!!! needs to show error if it does not exist 

//displays animals starting with the letter G
const gAnimals = animals.words.filter(word => word[0] === 'g');
console.log(gAnimals);


//displays # of animals starting with G
console.log(gAnimals.length);
