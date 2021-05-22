import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/pages/Home';


function App() {
  return (
    <div className="App">
      <div className="containter">
        <Router>
          <Route exact path="/" component={Home}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
