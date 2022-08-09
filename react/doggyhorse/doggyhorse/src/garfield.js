import FeelingsList from './feelings';

const Garfield = () => {
    return (
        <div className="theimage">
            <h1 className="name">Life</h1>
            <img src="https://i.imgur.com/F67Eq7J.jpeg" alt="cartoon of garfield"></img>
            <h3>How does he feel?</h3>  
            <FeelingsList/>                   
        </div>
    );
}

export default Garfield;