# 🧩 PopX React Application

A full-stack web application built using **React.js** for the frontend and **Node.js, Express.js, and MongoDB** for the backend.

This project was created as part of a **React JS Intern/Fresher Qualifier Task**, based on an Adobe XD design. The focus was on building a **pixel-perfect, responsive frontend** with smooth navigation and clean, maintainable code.

> 🔥 **Note:** Backend functionality was added as a **bonus** to demonstrate full-stack capabilities, including user authentication and session handling.

---

## 📌 Task Requirements

- Recreate the UI based on the given Adobe XD design.
- Implement routing between pages.
- Ensure the design is **pixel-perfect** and **centered** on the screen.
- Host the project on a platform like **Vercel** or **Netlify**.
- Share a public **GitHub repository**.

---

## 🎨 Design Reference

🔗 [Adobe XD Design Link](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd)

---

## 🚀 Live Demo

🔗 **Hosted Link:** frontendUrl

---

## 🗂️ GitHub Repository

🔗 **Repository Link:** githubLink

---

## ✨ Features

### 🖥️ Frontend

- ✅ Pixel-perfect UI based on Adobe XD
- ✅ Fully responsive design (mobile-first)
- ✅ Centered mobile app interface layout
- ✅ Seamless navigation using React Router v6
- ✅ LocalStorage for session persistence
- ✅ Modular components and clean structure
- ✅ Error and loading state handling

### 🔐 Backend (Bonus)

- ✅ User registration and login APIs
- ✅ Secure password hashing with `bcryptjs`
- ✅ MongoDB with `mongoose` for data modeling
- ✅ RESTful API with Express.js
- ✅ Environment variables using `dotenv`

---

## 🛠️ Tech Stack

| Layer     | Technologies                                   |
| --------- | ---------------------------------------------- |
| Frontend  | React.js, React Router v6, Tailwind CSS, Axios |
| Backend   | Node.js, Express.js, MongoDB, Mongoose         |
| Auth      | bcryptjs, JSON Web Tokens _(optional)_         |
| Dev Tools | Vite/CRA, Postman, VSCode, Netlify             |

---

## 📁 Project Structure

├── frontend/
│ └── src/
│ ├── components/
│ │ └── Button.jsx
│ ├── screens/
│ │ ├── WelcomeScreen.jsx
│ │ ├── LoginScreen.jsx
│ │ ├── RegisterScreen.jsx
│ │ └── AccountSettings.jsx
│ ├── App.jsx
│ └── index.jsx
│
└── backend/ (Bonus)
├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── authController.js
│ ├── models/
│ │ └── user.js
│ └── routes/
│ └── authRoutes.js
├── index.js
├── package.json
└── .env

---

## ⚙️ Getting Started

### 🔧 Frontend Setup

```bash
cd frontend
npm install
```

Create a .env file inside /frontend:

VITE_API_URL=http://localhost:5000/api

npm run dev

👉 Runs on: http://localhost:5173
🖥️ Backend Setup (Bonus)
cd backend
npm install

Create a .env file inside /backend with:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=yourSuperSecretKeyHere
FRONTEND_URL=http://localhost:5173
PORT=5000

Run the backend server:

npm run dev

👉 Runs on: http://localhost:5000

🔐 Environment Variables

Ensure the following are set in your /backend/.env file:

Variable Description
MONGO_URI MongoDB connection string
JWT_SECRET Secret key for JWT (if used)
FRONTEND_URL URL of the frontend
PORT Backend port (default: 5000)
📄 License

This project is for educational and evaluation purposes only.
