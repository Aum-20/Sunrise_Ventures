const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();

// Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(
    session({
        secret: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        },
    })
);

// routes
const homeRoute = require("./routes/home.routes.js");
const realEstate = require("./routes/realEstate.routes.js");
const adminRoute = require("./routes/admin.routes.js");
const contactRoute = require("./routes/workInProgress.routes.js");
const authRoute = require("./routes/auth.routes.js");

// API routes - consolidate under /api
app.use("/api/home", homeRoute);
app.use("/api/real-estate", realEstate);
app.use("/api/contact", contactRoute);
app.use("/api/admin", adminRoute);
app.use("/api/auth", authRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message,
        errors: err.errors || [],
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Resource not found",
    });
});

module.exports = app;
