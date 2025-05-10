const { Router } = require("express");
const {
    registerUser,
    loginUser,
    logoutUser,
    verifyEmail,
    forgotPassword,
    resetPassword,
} = require("../controllers/auth.controllers.js");

const router = Router();

// Public authentication routes
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
