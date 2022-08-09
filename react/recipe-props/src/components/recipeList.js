import Recipe from "./recipe";
import PropTypes from 'prop-types'

const RecipeList = (props) => {
    return (
        <div className= "recipe-list">
            {props.recipes.map((r, index)=> (
                //for every recipe we have, we're going to render the recipe component, set the index as the key, and using destructuring to pull out title, img, instructions, 
                <Recipe key={index} {...r}/>
            ))}
        </div>
    );
}

//using Prop-types module. the props that are passed into Recipe need to be strings, except for ingredients which needs to be an array of stings. This is all Required 
Recipe.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
}

//defaultProps is only read when there are no props currently being passing to the RecipeList component 
RecipeList.defaultProps = {
    recipes: [
     {
       title: "Spaghetti",
       instructions: "Open jar of Spaghetti sauce...",
       ingredients: ["pasta", "8 oz water", "1 box spaghetti"],
       img: "https://i.imgur.com/2q2OgnC.jpg"
     },
     {
       title: "Lobster Macaroni and cheese",
       instructions: "Combine lobster and macaroni.  Blend until creamy",
       ingredients: ["1 large lobster", "8 oz of macaroni"],
       img: "https://i.imgur.com/cUvCIrl.jpg"
     },
     {
       title: "Bacon Wrapped Filet Mignon",
       instructions: "Wrap filet mignon in bacon.  Add salt, oil, and pepper to taste.",
       ingredients: ["1 slice of bacon", "1 tbs olive oil", "1 pinch salt", "pepper"],
       img: "https://i.imgur.com/zdkqhsb.jpg"
     }
   ]
}

export default RecipeList;