import './App.css';
import NavBar from './components/NavBar'
import Items from './components/Items';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <h1>Game Shop</h1>
      <NavBar />
      <Items />
    </div>
    </Router>
  );
}

export default App;
