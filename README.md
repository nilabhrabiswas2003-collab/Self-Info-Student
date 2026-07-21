# 🎓 StudentHub - MERN Stack Student Activity Management System

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green" />
  <img src="https://img.shields.io/badge/Express.js-Framework-lightgrey" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green" />
  <img src="https://img.shields.io/badge/JWT-Authentication-orange" />
  <img src="https://img.shields.io/badge/Cloudinary-Storage-blue" />
  <img src="https://img.shields.io/badge/License-MIT-success" />
</p>

## 📖 Overview

StudentHub is a **role-based MERN Stack web application** designed for students, house owners, and shopkeepers. It provides secure authentication, document management, room listings, stationery product management, and note sharing through RESTful APIs.

The project follows the **MVC Architecture** and implements secure authentication using **JWT**, file uploads using **Multer**, cloud storage with **Cloudinary**, and MongoDB for persistent storage.

---

# ✨ Features

### 👨‍🎓 Student
- Student Registration & Login
- JWT Authentication
- Upload Avatar
- Update Profile
- Change Password
- Upload Notes
- Favourite Notes
- Order Products
- View House Owner Profiles

### 🏠 House Owner
- Register/Login
- Upload Rooms
- Update Room Availability
- Delete Rooms
- Update Avatar
- Update Scanner
- Update UPI
- Change Email
- Change Password

### 🛒 Shopkeeper
- Register/Login
- Upload Products
- Update Product Price
- Update Delivery Date
- Product Availability
- Customer Reviews
- Change Shop Location

---

# 🚀 Tech Stack

## Frontend

- React.js
- HTML5
- CSS3
- Bootstrap

## Backend

- Node.js
- Express.js
- REST API
- MVC Architecture

## Database

- MongoDB
- MongoDB Atlas

## Authentication

- JWT
- Cookies
- bcrypt

## Cloud Services

- Cloudinary
- Multer

## Tools

- Git
- GitHub
- Postman
- VS Code

---

# 📂 Project Structure

```
StudentHub
│
├── backend
│   ├── src
│   │
│   ├── controllers
│   │      ├── user.controller.js
│   │      ├── notes.controller.js
│   │      ├── room.controller.js
│   │      ├── product.controller.js
│   │      ├── houseOwner.controller.js
│   │      ├── shopKeeper.controller.js
│   │      └── order.controller.js
│   │
│   ├── routes
│   │      ├── user.route.js
│   │      ├── notes.route.js
│   │      ├── room.route.js
│   │      ├── product.route.js
│   │      ├── houseOwner.route.js
│   │      ├── shopKeeper.route.js
│   │      └── order.route.js
│   │
│   ├── middlewares
│   ├── models
│   ├── db
│   ├── utils
│   ├── app.js
│   └── index.js
│
├── frontend
│
└── README.md
```

---

# 🔐 Authentication

JWT Authentication

Protected Routes

Role Based Authorization (RBAC)

Refresh Token

Password Hashing using bcrypt

---

# 📡 REST API Endpoints

Base URL

```
/api/v1
```

---

# 👨‍🎓 Student APIs

| Method | Endpoint |
|----------|------------------------------|
| POST | /users/register |
| POST | /users/login |
| POST | /users/logout |
| POST | /users/regenerateRefreshToken |
| PATCH | /users/changePassword |
| PATCH | /users/updateAvatar |
| PATCH | /users/updateAccountDetails |
| POST | /users/getCurrentUser |
| GET | /users/Woner/:getWonerProfile |

---

# 📚 Notes APIs

| Method | Endpoint |
|----------|------------------------------|
| POST | /notes/UploadNote |
| POST | /notes/deletDocument |
| GET | /notes/addNotesPlaylist/:notesId |
| POST | /notes/getFevNotes |
| GET | /notes/removeNotes/:deletableDocument |
| POST | /notes/notes |

---

# 🏠 House Owner APIs

| Method | Endpoint |
|----------|--------------------------------|
| POST | /houseOwner/registerHouseWoner |
| POST | /houseOwner/HouseWonerLogin |
| POST | /houseOwner/HouseWonerLogout |
| POST | /houseOwner/Profile |
| POST | /houseOwner/regenerateWonerTokens |
| PATCH | /houseOwner/updateWonerAvatar |
| PATCH | /houseOwner/changeWonerPassword |
| PATCH | /houseOwner/changeScanner |
| PATCH | /houseOwner/changeUpiId |
| PATCH | /houseOwner/changeEmail |

---

# 🏘 Room APIs

| Method | Endpoint |
|----------|------------------------------------|
| POST | /rooms/UploadRooms |
| GET | /rooms/updateAvaliavlity/:roomId |
| POST | /rooms/deleteRoomDetails |

---

# 🛍 Product APIs

| Method | Endpoint |
|----------|------------------------------------|
| POST | /product/productUploadition |
| GET | /product/:productId |
| GET | /product/:productId/changeDeliveryDate |
| GET | /product/:productId/changePrice |
| GET | /product/:productId/changeAvaliability |
| GET | /product/:productId/Review |
| POST | /product/products |
| POST | /product/getSearchedProducts |

---

# 🛒 Order APIs

| Method | Endpoint |
|----------|-------------------------------|
| GET | /product/:productId/Order |

---

# 🏪 Shopkeeper APIs

| Method | Endpoint |
|----------|-------------------------------------------|
| POST | /shopKeeper/shopkeeperRegister |
| POST | /shopKeeper/shopkeeperLogin |
| POST | /shopKeeper/shopkeeperLogout |
| PATCH | /shopKeeper/LocationUpdate |
| POST | /shopKeeper/regenerateShopKeeperAccessAndRefreshToken |
| PATCH | /shopKeeper/changePhoneNumber |

---

# ⚙ Installation

```bash
git clone <repository-url>

cd StudentHub

cd backend

npm install

npm run dev
```

Create a `.env` file.

```env
PORT=8000

MONGODB_URI=

ACCESS_TOKEN_SECRET=

REFRESH_TOKEN_SECRET=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

# 🎯 Future Improvements

- Email Notifications
- Real-time Chat
- Push Notifications
- Admin Dashboard
- Payment Integration
- Docker Deployment
- CI/CD Pipeline

---

# 👨‍💻 Author

**Nilabhra Biswas**

GitHub:
https://github.com/nilabhrabiswas2003-collab

LinkedIn:
https://linkedin.com/in/nilabhrabiswas03

Email:
nilabhrabiswas8@gmail.com

---

## ⭐ If you like this project, don't forget to Star the repository!
