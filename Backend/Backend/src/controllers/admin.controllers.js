const asyncHandler = require("../utils/asyncHandler");
const Buyer = require("../models/realEstate_buyer.models.js");
const Seller = require("../models/realEstate_seller.models.js");
const User = require("../models/user.models.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");
const ContactUs = require("../models/contactUs.models.js");

// Auth Management
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, 'All fields are required');
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordCorrect(password))) {
        throw new ApiError(401, 'Invalid credentials');
    }

    req.session.user = user;
    res.json(new ApiResponse(200, { user: { email: user.email } }, "Login successful"));
});

const logout = asyncHandler(async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            throw new ApiError(500, "Logout failed");
        }
        res.json(new ApiResponse(200, null, "Logged out successfully"));
    });
});

// Admin Management
const createAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
        throw new ApiError(400, "Admin user already exists");
    }

    const admin = await User.create({
        email,
        password,
    });

    const createdAdmin = await User.findById(admin._id).select("-password");

    res.status(201).json(
        new ApiResponse(201, { admin: createdAdmin }, "Admin created successfully")
    );
});

// Real Estate Management
const getRealEstateData = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const [buyers, sellers, totalBuyers, totalSellers] = await Promise.all([
        Buyer.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        Seller.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        Buyer.countDocuments(),
        Seller.countDocuments()
    ]);
    
    res.json(new ApiResponse(200, { 
        buyers, 
        sellers,
        pagination: {
            totalBuyers,
            totalSellers,
            currentPage: page,
            totalPages: Math.max(
                Math.ceil(totalBuyers / limit),
                Math.ceil(totalSellers / limit)
            )
        }
    }));
});

const searchRealEstate = asyncHandler(async (req, res) => {
    const { query, type } = req.query;
    if (!query) {
        throw new ApiError(400, "Search query is required");
    }

    const regex = new RegExp(query, "i");
    const searchQuery = {
        $or: [
            { name: regex },
            { "location.state": regex },
            { "location.city": regex },
            { mobileNumber: regex },
            { email: regex }
        ]
    };

    const results = await Promise.all([
        type !== 'sellers' ? Buyer.find(searchQuery) : [],
        type !== 'buyers' ? Seller.find(searchQuery) : []
    ]);

    res.json(new ApiResponse(200, { 
        buyers: results[0], 
        sellers: results[1] 
    }));
});

const removeBuyer = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const buyer = await Buyer.findByIdAndDelete(id);
    if(!buyer) {
        throw new ApiError(404, 'Buyer not found');
    }

    res.json(new ApiResponse(200, null, "Buyer removed successfully"));
});

const removeSeller = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const seller = await Seller.findByIdAndDelete(id);
    if(!seller) {
        throw new ApiError(404, 'Seller not found');
    }

    res.json(new ApiResponse(200, null, "Seller removed successfully"));
});

// Contact Management
const getContacts = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const [contacts, total] = await Promise.all([
        ContactUs.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        ContactUs.countDocuments()
    ]);

    res.json(new ApiResponse(200, { 
        contacts,
        pagination: {
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            total
        }
    }));
});

const searchContacts = asyncHandler(async (req, res) => {
    const { query } = req.query;
    if (!query) {
        throw new ApiError(400, "Search query is required");
    }

    const regex = new RegExp(query, "i");
    const contacts = await ContactUs.find({
        $or: [
            { name: regex },
            { email: regex },
            { phoneNo: regex },
            { state: regex },
            { msg: regex },
        ],
    });

    res.json(new ApiResponse(200, { contacts }));
});

const removeContact = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const contact = await ContactUs.findByIdAndDelete(id);
    if(!contact) {
        throw new ApiError(404, 'Contact not found');
    }

    res.json(new ApiResponse(200, null, "Contact removed successfully"));
});

module.exports = {
    loginUser,
    logout,
    createAdmin,
    getRealEstateData,
    searchRealEstate,
    removeBuyer,
    removeSeller,
    getContacts,
    searchContacts,
    removeContact
};
