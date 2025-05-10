const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/user.models.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");

// User Registration
const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ApiError(409, "User with this email already exists");
    }

    // Create new user
    const user = await User.create({
        email,
        password,
    });

    // Remove password from response
    const createdUser = await User.findById(user._id).select("-password");

    req.session.user = createdUser;

    res.status(201).json(
        new ApiResponse(
            201,
            { user: createdUser },
            "User registered successfully"
        )
    );
});

// User Login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordCorrect(password))) {
        throw new ApiError(401, "Invalid credentials");
    }

    const loggedInUser = user.toObject();
    delete loggedInUser.password;

    req.session.user = loggedInUser;

    res.json(new ApiResponse(200, { user: loggedInUser }, "Login successful"));
});

// User Logout
const logoutUser = asyncHandler(async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            throw new ApiError(500, "Logout failed");
        }
        res.json(new ApiResponse(200, null, "Logged out successfully"));
    });
});

// Get Current User
const getCurrentUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.session.user._id).select("-password");
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    res.json(
        new ApiResponse(200, { user }, "User details retrieved successfully")
    );
});

// Verify Email (placeholder for future implementation)
const verifyEmail = asyncHandler(async (req, res) => {
    const { token } = req.body;

    // TODO: Implement email verification logic
    res.json(new ApiResponse(200, null, "Email verification endpoint"));
});

// Forgot Password
const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if (!email) {
        throw new ApiError(400, "Email is required");
    }

    const user = await User.findOne({ email });
    if (!user) {
        // For security, don't reveal if email exists or not
        res.json(
            new ApiResponse(
                200,
                null,
                "If your email exists, you will receive reset instructions"
            )
        );
        return;
    }

    // TODO: Implement password reset email logic
    res.json(new ApiResponse(200, null, "Password reset instructions sent"));
});

// Reset Password
const resetPassword = asyncHandler(async (req, res) => {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
        throw new ApiError(400, "Token and new password are required");
    }

    // TODO: Implement password reset logic
    res.json(new ApiResponse(200, null, "Password reset endpoint"));
});

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    verifyEmail,
    forgotPassword,
    resetPassword,
};
