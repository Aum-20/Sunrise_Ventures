
const ApiResponse = require("../utils/ApiResponse.js");

const getHomeData = (req, res) => {
    const sections = [
        {
            id: "real-estate",
            title: "Real Estate",
            image: "/images/realestate.jpg",
            link: "/real-estate"
        },
        {
            id: "agriculture",
            title: "Agriculture",
            image: "/images/agri.jpg",
            link: "/agriculture"
        },
        {
            id: "drone",
            title: "Drone Services",
            image: "/images/drone.jpg",
            link: "/drone"
        },
        {
            id: "global-opportunities",
            title: "Global Opportunities",
            image: "/images/global.jpg",
            link: "/global-opportunities"
        },
        {
            id: "alkaline-water",
            title: "Alkaline Water",
            image: "/images/alkaline.jpg",
            link: "/alkine-water"
        },
        {
            id: "farm-management",
            title: "Farm Management",
            image: "/images/farm.jpg",
            link: "/farm-management"
        }
    ];

    res.json(new ApiResponse(200, { sections }, "Home data retrieved successfully"));
};

const getAboutUs = (req, res) => {
    const aboutData = {
        description: "Welcome to Sunrise Ventures! We are dedicated to providing innovative solutions in various fields, including agriculture, drone technology, and more. Our mission is to empower individuals and businesses through cutting-edge technology and exceptional service.",
        contactInfo: {
            phone: "+91 9910511007",
            email: "faujiteams@gmail.com",
            address: "UG 48, Ansal Chambers 2, Near Bank Of Baroda, Bikaji Cama Place, New Delhi - 110066"
        }
    };

    res.json(new ApiResponse(200, { about: aboutData }, "About data retrieved successfully"));
};

module.exports = { getHomeData, getAboutUs };
