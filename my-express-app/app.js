// app.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const authRoutes = require("./routes/auth");
const shopkeeperRoutes = require("./routes/shopkeeper.js");
const customerRoutes = require("./routes/customer.js");
const authRoutes = require("./routes/auth")
const errorRoutes= require("./middlewares/error.js")

const cors = require("cors");

dotenv.config();

const app = express();

// Use CORS middleware
app.use(cors());

// Middleware
app.use(express.json());

// Routes
// this one is old single
// app.use("/api", authRoutes);
// this is new for both
app.use("/api/shopkeepers", shopkeeperRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api", authRoutes);
app.use(errorRoutes);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
