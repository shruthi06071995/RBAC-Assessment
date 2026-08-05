const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
    getMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
} = require("../controllers/memberController");

router.get(
    "/",
    protect,
    authorizeRoles("Admin", "Manager"),
    getMembers
);

router.get(
    "/:id",
    protect,
    authorizeRoles("Admin", "Manager"),
    getMemberById
);

router.post(
    "/",
    protect,
    authorizeRoles("Admin", "Manager"),
    createMember
);

router.put(
    "/:id",
    protect,
    authorizeRoles("Admin", "Manager"),
    updateMember
);

router.delete(
    "/:id",
    protect,
    authorizeRoles("Admin"),
    deleteMember
);

module.exports = router;