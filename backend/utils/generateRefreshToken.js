const jwt = require("jsonwebtoken");

const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: "7d",
        }
    );
};

module.exports = generateRefreshToken;