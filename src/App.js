import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Entries from './components/Entries';
import Home from './components/Home';
import Nav from './components/Nav';
import NewEntry from './components/NewEntry';
function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/entries">All Entries</Link></li>
        <li><Link to="/new_entry">New Entry</Link></li>
      </ul>
      
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/entries"><Entries/></Route>
        <Route path="/new_entry"><NewEntry/></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
