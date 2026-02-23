# 🛣️ HighwayDelite — Backend :

### 🚀 RESTful API for Highway Experience Booking Platform

This is the **backend server** for the HighwayDelite project —  
a full-stack application that lets users **explore, book, and confirm highway experiences** like Dhabas, Safaris, Treks, and more.  
Built using **Node.js**, **Express.js**, **TypeScript**, and **MongoDB**.

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Runtime** | Node.js (TypeScript) |
| **Framework** | Express.js |
| **Database** | MongoDB (via Mongoose) |
| **Environment Management** | dotenv |
| **CORS** | Enabled for frontend integration |
| **Development Tools** | Nodemon, ts-node |
| **Deployment** | Render / Vercel Functions |

---

## 📂 Folder Structure :

backend/
├── src/
│ ├── config/
│ │ └── db.ts # MongoDB connection
│ ├── controllers/
│ │ └── experienceController.ts # CRUD logic for experiences
│ ├── models/
│ │ └── experienceModel.ts # Mongoose schema
│ ├── routes/
│ │ └── experienceRoutes.ts # API routes
│ ├── utils/
│ │ └── seedData.ts # Script to populate sample data
│ └── server.ts # Main Express entry file
├── .env # Environment variables
├── tsconfig.json # TypeScript config
├── package.json
└── README.md

yaml
Copy code

---

## 🧠 Features

✅ TypeScript-powered Express API  
✅ MongoDB integration with Mongoose  
✅ Route-based modular structure  
✅ Pre-seeded experience data  
✅ RESTful endpoints for CRUD operations  
✅ CORS-enabled for frontend communication  
✅ Easy local + cloud deployment (Render/Vercel)

---

## 🔑 Environment Variables

Create a `.env` file in the backend root:

MONGO_URI=your_mongodb_connection_string
PORT=5000

yaml
Copy code

> ⚠️ Never commit your `.env` file to GitHub (already ignored in `.gitignore`).

---

## ⚡ Installation & Setup

Clone and install dependencies:
```bash
git clone https://github.com/prabhatK0812/HighwayDelite-backend.git
cd HighwayDelite-backend
npm install
