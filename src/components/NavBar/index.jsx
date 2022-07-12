import React from "react";
import CartWidget from "../CartWidget";

export const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav_brand">
          <h1>FLOR DEL SOL</h1>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <ul className="nav__list">
          <li>
            <a className="nav__link" href="#">
              PLANTAS INTERIOR
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              PLANTAS EXTERIOR
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              MACETAS
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              REGALÁ
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              <CartWidget /> Comprar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
