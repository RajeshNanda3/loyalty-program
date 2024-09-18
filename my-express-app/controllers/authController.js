// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Shopkeeper = require("../models/shopkeeper.model");
const Customer = require("../models/customer.model");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in either Shopkeeper or Customer collection
    const user =
      (await Shopkeeper.findOne({ email })) ||
      (await Customer.findOne({ email }));

    if (!user) {
      return res.status(400).send("User not found");
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    // Generate a token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      "your_jwt_secret",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, role: user.role, name :user.name, shopName: user.shopName});
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Server error");
  }
};
