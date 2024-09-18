// controllers/authController.js
const bcrypt = require("bcryptjs");
const shopkeeper = require("../models/shopkeeper.model");

exports.register = async (req, res) => {
  const {
    username,
    password,
    role,
    name,
    email,
    mobile,
    shopName,
    marketName,
    district,
    pincode,
    shopDealsWith,
    latitude,
    longitude,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newShopkeeper = new shopkeeper({
      username,
      password: hashedPassword,
      role,
      name,
      email,
      mobile,
      latitude,
      longitude,
      ...(role === "shopkeeper" && {
        shopName,
        marketName,
        district,
        pincode,
        shopDealsWith,
      }),
    });

    await newShopkeeper.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Error registering user");
  }
};
