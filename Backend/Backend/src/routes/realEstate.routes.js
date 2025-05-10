const { Router } = require("express");
const { 
    getListings, 
    createBuyerRequest, 
    createSellerListing 
} = require("../controllers/realEstate.controllers");

const router = Router();

// Listing management
router.get("/listings", getListings);

// Buyer management
router.post("/buyers", createBuyerRequest);

// Seller management
router.post("/sellers", createSellerListing);

module.exports = router;
