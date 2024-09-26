import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="announcement-bar">
        Announcement: I AM TO HELP YOU
      </div>
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="logo"> Logo Rajesh</div>
          <div className="nav-links">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            {/* <NavLink to="#">Shop</NavLink>
            <NavLink to="#">Donate</NavLink> */}
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to="/register" activeClassName="active">Register</NavLink>
            <NavLink to="/login" activeClassName="active">Login</NavLink>
          </div>
          {/* <div className="cart-icon">
            🛒
            <span className="cart-count">3</span>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
