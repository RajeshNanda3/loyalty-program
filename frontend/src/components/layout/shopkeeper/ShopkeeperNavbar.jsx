// src/components/layout/shopkeeper/ShopkeeperNavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ShopkeeperNavbar.css";
import Profile from "./ShopkeeperProfile";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const shopkeeperName = localStorage.getItem("ShopkeeperName");
  const navigate = useNavigate();
  

  return (
    <nav className="navbar">
      <h2>Hello, {shopkeeperName}</h2>
      <ul>
        
       
        <li>
          <Link to="/shopkeeper-dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/shopkeeper-dashboard/balance">Current Balance</Link>
        </li>
        <li>
          <Link to="/shopkeeper-dashboard/qr-scanner">QR Code Scanner</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
