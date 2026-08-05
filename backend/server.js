require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const memberRoutes = require("./routes/memberRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database
connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/members", memberRoutes);

app.get("/", (req, res) => {
  res.send("RBAC Backend is Running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});