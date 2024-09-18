// routes/shopkeeper.js
const express = require("express");
const router = express.Router();
const shopkeeperController = require("../controllers/shopkeeper2.controller.js");

router.post("/register", shopkeeperController.register);

module.exports = router;
