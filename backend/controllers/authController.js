const User = require("../models/userModel");
const RefreshToken = require("../models/refreshTokenModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateAccessToken = require("../utils/generateAccessToken");
const generateRefreshToken = require("../utils/generateRefreshToken");

const registerUser = async (req, res) => {

    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please fill all required fields",
        });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({
            message: "User already exists",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
    });

    if (user) {
        return res.status(201).json({
            message: "User Registered Successfully",
        });
    }

    return res.status(400).json({
        message: "User Registration Failed",
    });

};

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Please provide email and password",
        });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({
            message: "Invalid Email",
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid Password",
        });
    }

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    await RefreshToken.create({
        userId: user._id,
        token: refreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    console.log("Refresh Token Saved");

    return res.status(200).json({
        message: "Login Successful",

        accessToken,

        refreshToken,

        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    });

};

const refreshAccessToken = async (req, res) => {

    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({
            message: "Refresh Token Required",
        });
    }

    const storedToken = await RefreshToken.findOne({
        token: refreshToken,
    });

    if (!storedToken) {
        return res.status(401).json({
            message: "Invalid Refresh Token",
        });
    }

    const decoded = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET
    );

    const user = await User.findById(decoded.id);

    const newAccessToken = generateAccessToken(user);

    return res.status(200).json({
        accessToken: newAccessToken,
    });

};

const logoutUser = async (req, res) => {

    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(400).json({
            message: "Refresh Token Required",
        });
    }

    await RefreshToken.findOneAndDelete({
        token: refreshToken,
    });

    return res.status(200).json({
        message: "Logout Successful",
    });

};

const getProfile = async (req, res) => {

    return res.status(200).json({
        user: req.user,
    });

};

module.exports = {
    registerUser,
    loginUser,
    refreshAccessToken,
    logoutUser,
    getProfile,
};
