import React from 'react'
import { NavLink } from 'react-router-dom';

import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="nav header-list justify-content-between">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/transaction">
                Transaction
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/debts">
                Debts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header