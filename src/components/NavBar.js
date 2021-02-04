import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {



   return (
     <div className="nav">
       <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
       <NavLink exact activeClassName="active" className="nav-link" to="/signin">Login</NavLink>
       <NavLink exact activeClassName="active" className="nav-link" to="/expected-date">Wall St Bets</NavLink>
    </div>
 )
}

export default NavBar
