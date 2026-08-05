const adminDashboard = (req, res) => {
    res.json({
        message: "Welcome Admin",
    });
};

const managerDashboard = (req, res) => {
    res.json({
        message: "Welcome Manager",
    });
};

const memberDashboard = (req, res) => {
    res.json({
        message: "Welcome Member",
    });
};

module.exports = {
    adminDashboard,
    managerDashboard,
    memberDashboard,
};