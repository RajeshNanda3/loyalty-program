// controllers/shopkeeperController.js
const bcrypt = require("bcryptjs");
const Shopkeeper = require("../models/shopkeeper.model");

exports.register = async (req, res) => {
  const {
    username,
    password,
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

    const newShopkeeper = new Shopkeeper({
      username,
      password: hashedPassword,
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
    });

    await newShopkeeper.save();
    res.status(201).send("Shopkeeper registered successfully");
  } catch (error) {
    console.error("Error registering shopkeeper:", error);
    res.status(500).send("Error registering shopkeeper");
  }
};
