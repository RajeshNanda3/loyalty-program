import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/layout/shopkeeper/ShopkeeperNavbar";
import Profile from "../components/layout/shopkeeper/ShopkeeperProfile";
import CurrentBalance from "../components/layout/shopkeeper/ShopkeeperCurrentBalance";
import QRCodeScanner from "../components/layout/shopkeeper/ShopkeeperQRCodeScanner";

const ShopkeeperDashboard = () => {
  const [userName, setUserName] = useState("");
  const [dokan,setDokan] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUserName(name);
    setDokan(localStorage.getItem("ShopName"))
  },
   []);

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      <h2>Shopkeeper Dashboard {dokan}</h2>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/balance" element={<CurrentBalance />} />
        <Route path="/qr-scanner" element={<QRCodeScanner />} />
      </Routes>
    </div>
  );
};

export default ShopkeeperDashboard;
