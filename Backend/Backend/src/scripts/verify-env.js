const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

// Load environment variables
dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

const requiredEnvVars = ["PORT", "MONGODB_URL", "SESSION_KEY", "CORS_ORIGIN"];

const missingVars = [];

console.log("\nEnvironment Variables Check:\n");

requiredEnvVars.forEach((variable) => {
    if (!process.env[variable]) {
        missingVars.push(variable);
        console.log(`❌ ${variable} is missing`);
    } else {
        console.log(`✅ ${variable} is set`);
    }
});

if (missingVars.length > 0) {
    console.log("\n⚠️  Create a .env file with the following variables:");
    missingVars.forEach((variable) => {
        console.log(`${variable}=your_value_here`);
    });
} else {
    console.log("\n✅ All required environment variables are set!");
}

// Check MongoDB URL format
if (process.env.MONGODB_URL) {
    const url = process.env.MONGODB_URL;
    if (!url.startsWith("mongodb://") && !url.startsWith("mongodb+srv://")) {
        console.log(
            "\n⚠️  MONGODB_URL should start with mongodb:// or mongodb+srv://"
        );
    }
}
