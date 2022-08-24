import React from "react";
import './NavBar.css'
import CartWidget from "../CartWidget";
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (
    
    <div className="container">
      <div className="App">
      </div>
     <nav>
        <div className="nav_brand">
          <h1>FL☀R DEL SOL</h1>
        </div>
        <ul className="nav__list">
          <li>
            <NavLink className="nav__link" to= '/category/Plantas'>
              PLANTAS DE INTERIOR</NavLink>
              </li>
              <li>
            <NavLink className="nav__link" to='/category/Macetas'>
              MACETAS</NavLink>
              </li>
          <li>
            <NavLink className="nav__link" to='/category/regala'>
              REGALÁ</NavLink> 
            </li>
          <li>
            <NavLink className="nav__link" to='/cart'>
              <CartWidget />
            </NavLink> 
           </li>
        </ul>
      </nav>
    </div>
  );
};


export default NavBar;
