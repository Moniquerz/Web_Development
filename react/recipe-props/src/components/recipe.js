const Recipe = (props) => {
    //destructuring props, pulling out these properties
    const {title, img, instructions} = props
    //map over ingredient, for every ingredient we're making a list item
    const ingredients = props.ingredients.map((ing, index) => (
        //unique key is needed, it ties whats in the memory with whats in the DOM
        <li key={index}>{ing}</li>
    ));
    return (
        <div className="recipe-card"> 
        <div className="recipe-card-image">
            <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
            <h3 className="recipe-title">{title}</h3>
            <h4>ingredients:</h4>
        <ul>
            {ingredients}
        </ul>
        <h4>Instructions:</h4>
        <p>{instructions}</p>
        </div>
      </div>   
    );
}

export default Recipe; 