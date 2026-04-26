# Course Categories Setup Guide

## Overview

This guide explains how to populate your StudyNotion database with course categories, which are required for instructors to create courses.

## Quick Start

### Option 1: Run the Seeding Script (Recommended)

1. **Navigate to the server directory:**
   ```bash
   cd d:\studynotion\server
   ```

2. **Run the seeding script:**
   ```bash
   node utils/seedCategories.js
   ```

3. **Expected Output:**
   ```
   🔄 Connecting to MongoDB...
   ✅ Connected to MongoDB successfully!
   🌱 Seeding categories...
   ✅ Successfully seeded 14 categories!
   
   📋 Seeded categories:
      1. Web Development
      2. Mobile Development
      3. Data Science
      ... (and more)
   
   🔒 Database connection closed.
   ✨ Seeding completed successfully!
   ```

### Option 2: Create Categories via API (Admin Only)

If you prefer to create categories manually or need to add custom categories:

1. **Ensure you're logged in as an Admin user**

2. **Make a POST request to:**
   ```
   POST http://localhost:4000/api/v1/course/createCategory
   ```

3. **Request Headers:**
   ```json
   {
     "Authorization": "Bearer YOUR_ADMIN_TOKEN",
     "Content-Type": "application/json"
   }
   ```

4. **Request Body:**
   ```json
   {
     "name": "Your Category Name",
     "description": "Category description here"
   }
   ```

## Default Categories

The seeding script creates the following 14 categories:

1. **Web Development** - Modern websites and web applications
2. **Mobile Development** - iOS and Android app development
3. **Data Science** - Data analysis and visualization
4. **Machine Learning** - ML algorithms and predictive modeling
5. **Artificial Intelligence** - AI, NLP, and computer vision
6. **Cloud Computing** - AWS, Azure, Google Cloud
7. **DevOps** - CI/CD and infrastructure automation
8. **Cybersecurity** - Security and ethical hacking
9. **Blockchain** - Blockchain and smart contracts
10. **Game Development** - Game engines and programming
11. **UI/UX Design** - Interface and experience design
12. **Digital Marketing** - SEO, social media, advertising
13. **Business & Entrepreneurship** - Business skills and startups
14. **Photography & Video** - Photography and video production

## Troubleshooting

### Issue: "Categories already exist"

If you see a warning about existing categories, the script will not modify your database to preserve existing data. To add new categories:

1. Modify the script to check for duplicates by name
2. Or use the API to add individual categories

### Issue: "Database connection failed"

**Check your environment variables:**
- Ensure `.env` file exists in the server directory
- Verify `MONGODB_URL` is correctly set
- Test your MongoDB connection

**Example `.env` configuration:**
```
MONGODB_URL=mongodb://localhost:27017/studynotion
# or for MongoDB Atlas:
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/studynotion
```

### Issue: "Module not found"

**Install dependencies:**
```bash
cd d:\studynotion\server
npm install
```

## Verifying Categories

### Method 1: Check via Frontend

1. Start your backend server:
   ```bash
   npm run dev
   ```

2. Start your frontend application

3. Log in as an instructor

4. Navigate to: Dashboard → Add Course

5. Check the "Course Category" dropdown - it should now show all categories

### Method 2: Check via API

Make a GET request to:
```
GET http://localhost:4000/api/v1/course/showAllCategories
```

**Expected Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "name": "Web Development",
      "description": "Learn to build modern websites...",
      "courses": []
    },
    // ... more categories
  ]
}
```

## Adding Custom Categories

To add your own categories to the seeding script:

1. Open `server/utils/seedCategories.js`

2. Add your category to the `defaultCategories` array:
   ```javascript
   {
     name: "Your Category Name",
     description: "Your category description",
   }
   ```

3. Run the script again (it will skip if categories already exist)

## Need Help?

- Ensure MongoDB is running
- Check server logs for detailed error messages
- Verify your `.env` configuration
- Make sure you have the required permissions (Admin role for API method)
