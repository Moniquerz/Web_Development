import {useState} from 'react'

const Clicker = () => {
    //useState initializes state by setting it to 1, num how we read state, setNum is a function that allows us to update the state
    let [num, setNum] = useState(1);

    const genRandom = () => {
        //generates a random numner. need +1, otherwise it will give 0-9
        let rand= Math.floor(Math.random() * 10) + 1;
        //update state with new random number
        setNum(rand)
    }
    return (
    //when button is clicked, function genRandom will be called
    //if num is equal to seven, winner will display in h2, otherwise generate button
    <>
    <h1>Number is: {num}</h1>
    
    {num === 7 ? <h2>Winner!</h2> : <button onClick={genRandom}> Random Number</button>}
    
    </>
    );
}

export default Clicker;