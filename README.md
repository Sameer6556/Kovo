<div align="center">
  <img src="./public/kovo-logo.png" alt="Kovo Logo" width="200"/>
  <h1>Kovo</h1>
  <p><strong>A Modern, Full-Stack Ed-Tech Platform built for Scalability and Performance</strong></p>
  
  <a href="https://kovo-s6556.vercel.app/"><strong>View Live Demo »</strong></a>
</div>

<br />

## Overview

Kovo is a comprehensive, full-stack educational technology platform engineered to facilitate seamless online learning and course management. It serves as a dual-sided marketplace where **Students** can discover, purchase, and consume educational content, and **Instructors** can create, manage, and monetize their courses. 

Built entirely from scratch, Kovo emphasizes system architecture, data integrity, and a highly responsive user experience. 

## Architecture & Tech Stack

Kovo is built on the **MERN** stack, leveraging modern tools for state management, authentication, media hosting, and payments.

### Frontend
- **Framework:** React.js
- **State Management:** Redux Toolkit (with local storage persistence)
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS
- **Components:** Modular, reusable UI components prioritizing separation of concerns

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JSON Web Tokens (JWT) & bcrypt
- **Media Storage:** Cloudinary
- **Payment Gateway:** Razorpay
- **Email Delivery:** Nodemailer (SMTP) / Promailer.xyz HTTP API

---

## Key Features & Engineering Decisions

### 1. Robust Role-Based Access Control (RBAC)
Implemented strict middleware guards to protect 15+ RESTful API endpoints. Routes are specifically isolated for `Admin`, `Instructor`, and `Student` roles. This architectural decision prevents unauthorized state mutations before the request ever hits the controller logic.

### 2. Complex Database Relationships & Data Integrity
Unlike basic CRUD apps, Kovo handles deeply nested data relationships (Courses -> Sections -> Sub-sections). I engineered **cascading delete operations** to ensure that when a course is removed, all enrolled students are safely unenrolled, and all nested video sections are recursively purged, preventing orphaned data from clogging the MongoDB database.

### 3. Persistent Global State
Leveraged Redux Toolkit for global state management (e.g., Shopping Cart, User Authentication). By syncing Redux state with `localStorage`, the application maintains session persistence across hard refreshes, resulting in a significantly more stable and premium user experience.

### 4. Media & Payment Integration
Integrated Cloudinary for optimized image and video hosting, ensuring fast load times for course content. Integrated Razorpay for secure, end-to-end checkout flows with webhook verification to confirm payment signatures.

---

## Local Development Setup

### Prerequisites
- Node.js (v16+)
- MongoDB Database (Local or Atlas)
- Cloudinary Account
- Razorpay Developer Account

### 1. Clone the repository
```bash
git clone https://github.com/Sameer6556/kovo.git
cd kovo
```

### 2. Install Dependencies
Install dependencies for both the frontend client and the backend server.
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 3. Environment Variables
You will need to set up environment variables for both the client and the server.
- Copy `.env.example` to `.env` in the root directory and fill in `REACT_APP_BASE_URL`.
- Copy `server/.env.example` to `server/.env` and fill in your MongoDB URI, JWT secrets, Cloudinary API keys, and Razorpay credentials.

### 4. Run the Application
You can run both the client and the server concurrently from the root directory.
```bash
npm run dev
```
- **Frontend App:** `http://localhost:3000`
- **Backend API:** `http://localhost:4000`

---

## Deployment

The application is deployed across two separate environments:
- **Frontend:** Hosted on [Vercel](https://vercel.com/) for global edge-network delivery.
- **Backend:** Hosted on [Render](https://render.com/) with the MongoDB database hosted on MongoDB Atlas.
