// models/Shopkeeper.js
const mongoose = require("mongoose");

const shopkeeperSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  shopName: { type: String, required: true },
  marketName: { type: String, required: true },
  district: { type: String, required: true },
  pincode: { type: String, required: true },
  shopDealsWith: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  role: { type: String, default: "shopkeeper" },
});

module.exports = mongoose.model("Shopkeeper", shopkeeperSchema);
