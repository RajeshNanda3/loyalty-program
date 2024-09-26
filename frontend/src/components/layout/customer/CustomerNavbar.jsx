import React from 'react'
import{NavLink} from "react-router-dom"

function CustomerNavbar() {
  return (
    <nav className='navbar'>
      <h2>Hello Customer</h2>
      <div className='nav-links'>
      <NavLink to="/customer-dashboard/profile" activeClassName= "active">Profile</NavLink>
      <NavLink to="/customer-dashboard/balance" activeClassName= "active">CurrentBalance</NavLink>
      <NavLink to="/customer-dashboard/qr-scanner" activeClassName= "active">QR CodeScanner</NavLink>

      </div>
    </nav>
  )
}

export default CustomerNavbar