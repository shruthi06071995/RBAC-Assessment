const User = require("../models/userModel");

// GET ALL MEMBERS
const getMembers = async (req, res) => {

    try {

        const {
            search = "",
            page = 1,
            limit = 10,
            sort = "createdAt"
        } = req.query;

        const query = {
            role: "Member",
            name: { $regex: search, $options: "i" }
        };

        const members = await User.find(query)
            .select("-password")
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await User.countDocuments(query);

        res.status(200).json({
            total,
            page: Number(page),
            members
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// GET MEMBER BY ID
const getMemberById = async (req, res) => {

    try {

        const member = await User.findById(req.params.id).select("-password");

        if (!member) {
            return res.status(404).json({
                message: "Member not found"
            });
        }

        res.status(200).json(member);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// CREATE MEMBER
const createMember = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const member = await User.create({
            name,
            email,
            password,
            role: "Member"
        });

        res.status(201).json(member);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// UPDATE MEMBER
const updateMember = async (req, res) => {

    try {

        const member = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        res.status(200).json(member);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// DELETE MEMBER
const deleteMember = async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Member deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
};