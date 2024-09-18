// models/Shopkeeper.js
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },

  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  role: { type: String, default: "customer" },
});

module.exports = mongoose.model("Customer", customerSchema);
