import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerNavbar from "../components/layout/customer/CustomerNavbar";
import Profile from "../components/layout/customer/CustomerProfile";
import CurrentBalance from "../components/layout/customer/CustomerCurrentBalance";
import QRCodeScanner from "../components/layout/customer/CustomerQRCodeScanner";

function CusomerDashboard() {
  return (
    <div>
      <CustomerNavbar />
      <h2>Welcome Guest</h2>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/balance" element={<CurrentBalance />} />
        <Route path="/qr-scanner" element={<QRCodeScanner />} />
      </Routes>
    </div>
  );
}

export default CusomerDashboard;
