const express = require('express');
const app = express();
const pokemon = require('pokemon');

app.get('/', (req, res)=> {
    res.send('I am the Pokemon root route.');
});

//sends a random pokemon
app.get('/pokemon', (req, res)=> {
    res.send(pokemon.random());
});


//sends an array of 5 pokemon
app.get('/dex', (req, res)=> {
    const pokedex = [];
    for (var i=0; i<5; i++) {
        pokedex.push(pokemon.random());
      }
    res.send(pokedex);
});


//sends back array of 5 pokemon with attack and defense listed
app.get('/pokemon/dex', (req,res)=> {
    const pokedex = [
        {
            pokemon: pokemon.random(),
            attack: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
            defense: Math.floor(Math.random()* 100) + 1
        },
        {
            pokemon: pokemon.random(),
            attack: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
            defense: Math.floor(Math.random()* 100) + 1
        },
        {
            pokemon: pokemon.random(),
            attack: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
            defense: Math.floor(Math.random()* 100) + 1
        },
        {
            pokemon: pokemon.random(),
            attack: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
            defense: Math.floor(Math.random()* 100) + 1
        },
        {
            pokemon: pokemon.random(),
            attack: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
            defense: Math.floor(Math.random()* 100) + 1
        }
    ]
    res.send(pokedex);
});




app.get('/battle', (req, res)=> {
    //this gives us an array of 2 random pokemon objects
    const pokedex = [
        {
            pokemon: pokemon.random(),
            attack: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
            defense: Math.floor(Math.random()* 100) + 1
        },
        {
            pokemon: pokemon.random(),
            attack: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
            defense: Math.floor(Math.random()* 100) + 1
        }
    ]


    const player1 = pokedex[0]
    const player2 = pokedex[1]

    // this sets a winner and loser based on the attack number. higher number is winner
    if (player1['attack'] > player2['attack']) {
        winner = player1
        loser = player2;
      } else {
        winner = player2
        loser = player1;
      }
    
    res.send(`And the winner is ${winner['pokemon']} with an attack of ${winner['attack']} and a defense of ${winner['defense']} versus ${loser['pokemon']} who has an attack of ${loser['attack']} and a defense of ${loser['defense']}`);
    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`App is listening on port ${PORT}`));