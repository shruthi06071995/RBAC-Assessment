const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
    adminDashboard,
    managerDashboard,
    memberDashboard,
} = require("../controllers/dashboardController");

router.get(
    "/admin",
    protect,
    authorizeRoles("Admin"),
    adminDashboard
);

router.get(
    "/manager",
    protect,
    authorizeRoles("Admin", "Manager"),
    managerDashboard
);

router.get(
    "/member",
    protect,
    authorizeRoles("Admin", "Manager", "Member"),
    memberDashboard
);

module.exports = router;