import Clicker from './components/clicker';
import './App.css';



function App() {
  return (
    <>
    <div className="App">
    <h1>Lucky Number Seven</h1>
    <p>Click button to generate a random number between 1-10. Lucky number 7 Wins!</p>
      <Clicker/>
    </div>
    </>
  );
}

export default App;
