import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <div className="container">
        <ul>
          {/* using Link component will not cause a full refresh of page like <a> tags do  */}
          <li><Link to="/home"> Home</Link></li>
          <li><Link to="/about"> About</Link></li>
          <li><Link to="/contact"> Contact</Link></li>
        
        </ul>
        <hr/>
        <Routes>
          {/* Route component renders a component we provided to it if the current URL location matches the path prop specified in it  */}
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
