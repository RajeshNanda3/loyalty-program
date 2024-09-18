import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [userName, setUserName] = useState(""); // State to store the user's name
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        formData
      );
      console.log(response.data); // Log the response data
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name",response.data.name);
      localStorage.setItem("ShopkeeperName",response.data.name);
      localStorage.setItem("ShopName",response.data.shopName);
      setUserName(response.data.name); // Store the user's name
      setSuccessMessage(`Welcome, ${response.data.name}! Redirecting...`);
      setTimeout(() => {
        if (response.data.role === "shopkeeper") {
          navigate("/shopkeeper-dashboard");
        } else if (response.data.role === "customer") {
          navigate("/customer-dashboard");
        } else if (response.data.role === "administrator") {
          navigate("/admin-dashboard");
        }
      }, 2000);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <p className="text-sm text-center text-gray-600">
            Not registered? <button onClick={() => navigate("/register")} className="text-indigo-600 hover:underline">Register here</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
