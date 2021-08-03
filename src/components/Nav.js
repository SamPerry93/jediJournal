import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import '../styles/nav.css';
import Entries from './Entries';
import Home from './Home';
import NewEntry from './NewEntry';
const Nav = () => {
    return(
        <>
        
        <BrowserRouter>
        <div className="nav-container">
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/entries">All Entries</Link></li>
                <li><Link className="link" to="/new_entry">New Entry</Link></li>
            </ul>
        </div>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/entries"><Entries/></Route>
        <Route path="/new_entry"><NewEntry/></Route>
      </Switch>
      </BrowserRouter>
        
        
        </>
    )
}
export default Nav;