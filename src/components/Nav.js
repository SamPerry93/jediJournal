import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { RiBookFill, RiHomeFill } from 'react-icons/ri';
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
            <Link className="link" to="/"><div className="link-container">
                <li><i><RiHomeFill/></i></li><p>Home</p></div></Link>
                <Link className="link" to="/entries"><div className="link-container">
                <li><i><RiBookFill/></i></li><p>See Yours</p></div></Link>
                <Link className="link" to="/new_entry"><div className="link-container">
                <li><i><FiPlus/></i></li><p>Add Entry</p></div></Link>
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