const User = require("../models/userModel");

const getUsers = async (req, res) => {
    const users = await User.find().select("-password");

    res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    res.status(200).json(user);
};

const updateUserRole = async (req, res) => {
    const { role } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    user.role = role;

    await user.save();

    res.status(200).json({
        message: "Role Updated",
        user,
    });
};

const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    await user.deleteOne();

    res.status(200).json({
        message: "User Deleted",
    });
};

module.exports = {
    getUsers,
    getUserById,
    updateUserRole,
    deleteUser,
};