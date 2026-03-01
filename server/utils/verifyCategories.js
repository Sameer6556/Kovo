const mongoose = require("mongoose");
const Category = require("../models/Category");
require("dotenv").config();

const { MONGODB_URL } = process.env;

// Function to verify categories
const verifyCategories = async () => {
    try {
        console.log("🔄 Connecting to MongoDB...");

        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ Connected to MongoDB successfully!\n");

        const categories = await Category.find();

        console.log(`📊 Total categories in database: ${categories.length}\n`);

        if (categories.length === 0) {
            console.log("⚠️  No categories found. Please run the seeding script first.");
        } else {
            console.log("📋 Available categories:");
            categories.forEach((cat, index) => {
                console.log(`   ${index + 1}. ${cat.name}`);
                console.log(`      Description: ${cat.description}`);
                console.log(`      ID: ${cat._id}`);
                console.log(`      Courses: ${cat.courses.length}\n`);
            });
        }

        await mongoose.connection.close();
        console.log("🔒 Database connection closed.");

    } catch (error) {
        console.error("❌ Error verifying categories:", error.message);
        process.exit(1);
    }
};

verifyCategories();
