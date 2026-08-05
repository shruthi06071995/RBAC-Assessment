const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { registerUser, loginUser, refreshAccessToken, logoutUser, getProfile } = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/refresh", refreshAccessToken);

router.post("/logout", logoutUser);

router.get("/profile", protect, getProfile);

module.exports = router;