const asyncHandler = require("../utils/asyncHandler.js");
const ContactUs = require("../models/contactUs.models.js");
const ApiResponse = require("../utils/ApiResponse.js");
const ApiError = require("../utils/ApiError.js");

const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, phoneNo, state, msg } = req.body;

    if (!name || !email || !phoneNo || !state || !msg) {
        throw new ApiError(400, "All fields are required");
    }

    const contact = await ContactUs.create({
        name,
        email,
        phoneNo,
        state,
        msg,
    });

    res.status(201).json(
        new ApiResponse(201, { contact }, "Contact form submitted successfully")
    );
});

module.exports = { submitContactForm };
