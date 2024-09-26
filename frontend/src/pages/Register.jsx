import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Register.css'; // We'll create this file for styling

const Register = () => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState('shopkeeper');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    mobile: '',
    shopName: '',
    marketName: '',
    district: '',
    pincode: '',
    shopDealsWith: '',
    latitude: '',
    longitude: '',
    fullName: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prevData) => ({
            ...prevData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const url = activeForm === 'shopkeeper' 
      ? 'http://localhost:5000/api/shopkeepers/register' 
      : 'http://localhost:5000/api/customers/register';
    const data = activeForm === 'shopkeeper' 
      ? {
          username: formData.username,
          password: formData.password,
          role: 'shopkeeper',
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          shopName: formData.shopName,
          marketName: formData.marketName,
          district: formData.district,
          pincode: formData.pincode,
          shopDealsWith: formData.shopDealsWith,
          latitude: formData.latitude,
          longitude: formData.longitude,
        }
      : {
          username: formData.username,
          password: formData.password,
          role: 'customer',
          name: formData.fullName,
          email: formData.email,
          mobile: formData.mobile,
        };

    try {
      const response = await axios.post(url, data);
      setMessage('Registration successful!');
      navigate("/login");
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      setMessage('Registration failed!');
    }
  };

  return (
    <div className="register-container">
      <div className="toggle-buttons">
        <button
          className={activeForm === 'shopkeeper' ? 'active' : ''}
          onClick={() => setActiveForm('shopkeeper')}
        >
          Shopkeeper
        </button>
        <button
          className={activeForm === 'customer' ? 'active' : ''}
          onClick={() => setActiveForm('customer')}
        >
          Customer
        </button>
      </div>
      <div className="forms-container">
        {activeForm === 'shopkeeper' && (
          <form className="form" onSubmit={handleRegister}>
            <h2>Register as Shopkeeper</h2>
            <label>
              Username:
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Mobile:
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </label>
            <label>
              Shop Name:
              <input type="text" name="shopName" value={formData.shopName} onChange={handleChange} required />
            </label>
            <label>
              Market Name:
              <input type="text" name="marketName" value={formData.marketName} onChange={handleChange} required />
            </label>
            <label>
              District:
              <input type="text" name="district" value={formData.district} onChange={handleChange} required />
            </label>
            <label>
              Pincode:
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
            </label>
            <label>
              Shop Deals With:
              <input type="text" name="shopDealsWith" value={formData.shopDealsWith} onChange={handleChange} required />
            </label>
            <button type="submit">Register</button>
          </form>
        )}
        {activeForm === 'customer' && (
          <form className="form" onSubmit={handleRegister}>
            <h2>Register as Customer</h2>
            <label>
              Username:
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <label>
              Full Name:
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Mobile:
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </label>
            <button type="submit">Register</button>
          </form>
        )}
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
