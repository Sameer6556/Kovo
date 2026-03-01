const mongoose = require("mongoose");
const Category = require("../models/Category");
require("dotenv").config();

const { MONGODB_URL } = process.env;

// Default categories to seed
const defaultCategories = [
    {
        name: "Web Development",
        description: "Learn to build modern websites and web applications using the latest technologies and frameworks.",
    },
    {
        name: "Mobile Development",
        description: "Master mobile app development for iOS and Android platforms.",
    },
    {
        name: "Data Science",
        description: "Explore data analysis, visualization, and statistical modeling techniques.",
    },
    {
        name: "Machine Learning",
        description: "Dive into machine learning algorithms, neural networks, and predictive modeling.",
    },
    {
        name: "Artificial Intelligence",
        description: "Learn about AI concepts, natural language processing, and computer vision.",
    },
    {
        name: "Cloud Computing",
        description: "Master cloud platforms like AWS, Azure, and Google Cloud for scalable applications.",
    },
    {
        name: "DevOps",
        description: "Learn continuous integration, deployment, and infrastructure automation.",
    },
    {
        name: "Cybersecurity",
        description: "Understand security principles, ethical hacking, and protecting digital assets.",
    },
    {
        name: "Blockchain",
        description: "Explore blockchain technology, smart contracts, and decentralized applications.",
    },
    {
        name: "Game Development",
        description: "Create engaging games using popular game engines and programming languages.",
    },
    {
        name: "UI/UX Design",
        description: "Master user interface and user experience design principles and tools.",
    },
    {
        name: "Digital Marketing",
        description: "Learn SEO, social media marketing, content strategy, and digital advertising.",
    },
    {
        name: "Business & Entrepreneurship",
        description: "Develop business skills, startup strategies, and entrepreneurial mindset.",
    },
    {
        name: "Photography & Video",
        description: "Master photography techniques, video production, and editing skills.",
    },
];

// Function to seed categories
const seedCategories = async () => {
    try {
        console.log("🔄 Connecting to MongoDB...");

        // Connect to MongoDB
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ Connected to MongoDB successfully!");

        // Check if categories already exist
        const existingCategories = await Category.find();

        if (existingCategories.length > 0) {
            console.log(`⚠️  Found ${existingCategories.length} existing categories in the database.`);
            console.log("📋 Existing categories:");
            existingCategories.forEach((cat, index) => {
                console.log(`   ${index + 1}. ${cat.name}`);
            });

            console.log("\n❓ Do you want to:");
            console.log("   - Keep existing categories (no changes will be made)");
            console.log("   - Add only new categories that don't exist");
            console.log("   - Delete all and reseed (WARNING: This will remove all existing categories)");
            console.log("\n💡 To add only new categories, modify this script to check for duplicates.");
            console.log("💡 For now, skipping seeding to preserve existing data.");

            await mongoose.connection.close();
            console.log("\n🔒 Database connection closed.");
            return;
        }

        // Insert default categories
        console.log("🌱 Seeding categories...");
        const result = await Category.insertMany(defaultCategories);

        console.log(`✅ Successfully seeded ${result.length} categories!`);
        console.log("\n📋 Seeded categories:");
        result.forEach((cat, index) => {
            console.log(`   ${index + 1}. ${cat.name}`);
        });

        // Close the connection
        await mongoose.connection.close();
        console.log("\n🔒 Database connection closed.");
        console.log("✨ Seeding completed successfully!");

    } catch (error) {
        console.error("❌ Error seeding categories:", error.message);
        console.error(error);
        process.exit(1);
    }
};

// Run the seeding function
seedCategories();
