const asyncHandler = require("../utils/asyncHandler.js");
const ApiResponse = require("../utils/ApiResponse.js");
const ApiError = require("../utils/ApiError.js");
const Buyer = require("../models/realEstate_buyer.models.js");
const Seller = require("../models/realEstate_seller.models.js");

// Listing Management
const getListings = asyncHandler(async (req, res) => {
    const { type, state, city, propertyType, minPrice, maxPrice, minArea, maxArea } = req.query;
    let buyerQuery = {};
    let sellerQuery = {};

    if (state) {
        buyerQuery["location.state"] = state;
        sellerQuery["location.state"] = state;
    }
    if (city) {
        buyerQuery["location.city"] = city;
        sellerQuery["location.city"] = city;
    }
    if (propertyType) {
        buyerQuery.propertyType = propertyType;
        sellerQuery.propertyType = propertyType;
    }
    if (minArea || maxArea) {
        buyerQuery.area = {};
        sellerQuery.area = {};
        if (minArea) {
            buyerQuery.area.$gte = minArea;
            sellerQuery.area.$gte = minArea;
        }
        if (maxArea) {
            buyerQuery.area.$lte = maxArea;
            sellerQuery.area.$lte = maxArea;
        }
    }
    if (minPrice || maxPrice) {
        if (minPrice) {
            buyerQuery.budget = { $gte: minPrice };
            sellerQuery.cost = { $gte: minPrice };
        }
        if (maxPrice) {
            buyerQuery.budget = { ...buyerQuery.budget, $lte: maxPrice };
            sellerQuery.cost = { ...sellerQuery.cost, $lte: maxPrice };
        }
    }

    const [buyers, sellers] = await Promise.all([
        type !== 'sellers' ? Buyer.find(buyerQuery).sort({ createdAt: -1 }) : [],
        type !== 'buyers' ? Seller.find(sellerQuery).sort({ createdAt: -1 }) : []
    ]);
    
    res.json(new ApiResponse(200, { buyers, sellers }, "Listings retrieved successfully"));
});

// Buyer Management
const createBuyerRequest = asyncHandler(async (req, res) => {
    const { 
        name, 
        whatsappNumber, 
        mobileNumber, 
        email, 
        state, 
        city, 
        area, 
        budget, 
        propertyType 
    } = req.body;

    if ([name, whatsappNumber, email, state, city].some(field => !field)) {
        throw new ApiError(400, "Required fields missing");
    }

    const buyer = await Buyer.create({
        name,
        whatsappNumber,
        mobileNumber: mobileNumber || whatsappNumber,
        email,
        location: { state, city },
        area,
        budget,
        propertyType,
    });

    res.status(201).json(new ApiResponse(201, { buyer }, "Buyer request created successfully"));
});

// Seller Management
const createSellerListing = asyncHandler(async (req, res) => {
    const {
        name,
        whatsappNumber,
        mobileNumber,
        email,
        address,
        city,
        state,
        pincode,
        area,
        cost,
        propertyType
    } = req.body;
    
    if ([name, whatsappNumber, email, address, city, state, pincode, area, cost]
        .some((field) => !field)) {
        throw new ApiError(400, "Required fields missing");
    }
    
    const seller = await Seller.create({
        name,
        whatsappNumber,
        mobileNumber: mobileNumber || whatsappNumber,
        email,
        location: { address, city, state, pincode },
        area,
        cost,
        propertyType,
    });

    res.status(201).json(new ApiResponse(201, { seller }, "Seller listing created successfully"));
});

module.exports = { 
    getListings, 
    createBuyerRequest, 
    createSellerListing 
};
