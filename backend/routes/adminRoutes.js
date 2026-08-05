const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
    getUsers,
    getUserById,
    updateUserRole,
    deleteUser,
} = require("../controllers/adminController");

router.get(
    "/users",
    protect,
    authorizeRoles("Admin"),
    getUsers
);

router.get(
    "/users/:id",
    protect,
    authorizeRoles("Admin"),
    getUserById
);

router.put(
    "/users/:id",
    protect,
    authorizeRoles("Admin"),
    updateUserRole
);

router.delete(
    "/users/:id",
    protect,
    authorizeRoles("Admin"),
    deleteUser
);

module.exports = router;