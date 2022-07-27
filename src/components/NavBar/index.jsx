import React from "react";
import './NavBar.css'
import CartWidget from "../CartWidget";
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <div className="nav_brand">
          <h1>FLOR DEL SOL</h1>
          <div>
            <img className="logo"  src="" alt="" />
          </div>
        </div>
        <ul className="nav__list">
          <li>
            <NavLink className="nav__link" to= '/categoria/Plantas'>
              PLANTAS DE INTERIOR</NavLink>
              </li>
              <li>
            <NavLink className="nav__link" to='/categoria/Macetas'>
              MACETAS</NavLink>
              </li>
          <li>
            <NavLink className="nav__link" to='/categoria/regala'>
              REGALÁ</NavLink> 
            </li>
          <li>
            <NavLink className="nav__link" to='cart'>
              <CartWidget /> Comprar</NavLink> 
           </li>
        </ul>
      </nav>
    </div>
  );
};


export default NavBar;
