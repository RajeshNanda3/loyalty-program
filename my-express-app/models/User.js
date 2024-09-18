// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    shopName: { type: String },
    marketName: { type: String },
    district: { type: String },
    pincode: { type: String },
    shopDealsWith: { type: String },
    latitude: { type: String },
    longitude: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
