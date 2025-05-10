const { Router } = require("express");
const { getHomeData, getAboutUs } = require("../controllers/home.controllers.js");

const router = Router();

router.get("/", getHomeData);
router.get("/about", getAboutUs);

module.exports = router;