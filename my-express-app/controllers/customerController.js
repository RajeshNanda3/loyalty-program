// controllers/customerController.js
const bcrypt = require("bcryptjs");
const Customer = require("../models/customer.model");

exports.register = async (req, res) => {
  const {
    username,
    password,
    name,
    email,
    mobile,
    latitude,
    longitude,
  } = req.body;

  try {
    console.log("list");
    const hashedPassword = await bcrypt.hash(password, 10);

    const newCustomer = new Customer({
      username,
      password: hashedPassword,
      name,
      email,
      mobile,
      latitude,
      longitude,
    });

    await newCustomer.save();
    res.status(201).send("Customer registered successfully");
  } catch (error) {
    console.error("Error registering customer:", error);
    res.status(500).send("Error registering customer");
  }
};
