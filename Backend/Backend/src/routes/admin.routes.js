const { Router } = require("express");
const isAuthenticated = require("../middlewares/auth.middlewares.js");
const {
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
} = require("../controllers/admin.controllers.js");

const router = Router();

// Auth routes
router.post("/login", loginUser);
router.post("/logout", logout);

// Protected routes
router.use(isAuthenticated);

// Admin management
router.post("/", createAdmin);

// Real estate management
router.get("/real-estate", getRealEstateData);
router.get("/real-estate/search", searchRealEstate);
router.delete("/real-estate/buyers/:id", removeBuyer);
router.delete("/real-estate/sellers/:id", removeSeller);

// Contact management
router.get("/contacts", getContacts);
router.get("/contacts/search", searchContacts);
router.delete("/contacts/:id", removeContact);

module.exports = router;
