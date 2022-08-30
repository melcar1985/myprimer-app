import React from "react";
import './NavBar.css'
import CartWidget from "../CartWidget";
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (
    
    <div className="container">
     <nav>
        <div className="nav_brand">
          <h1>FL☀R DEL SOL</h1>
        </div>
        <ul className="nav__list" >
          <li>
            <NavLink className="nav__link" to= '/'>
              PLANTAS DE INTERIOR Y MUCHO MAS...</NavLink>
              </li>
              <li>
              <NavLink className="nav__link" to='/cart'>
              <CartWidget />
              </NavLink> 
              </li>
              <li>
            <NavLink className="nav__link" to= '/Contacto'>
              Contacto
              </NavLink>
              </li>
              
            <NavLink className="nav__link" to= '/Buscar'>
            Filtrar
              </NavLink>
              
              
            </ul>
         </nav>
      </div>
  );
};


export default NavBar;
