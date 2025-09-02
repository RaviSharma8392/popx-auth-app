const express = require("express");
const authRouter = express.Router();
const { signUp, login } = require("../controllers/authController");

// Signup route
authRouter.post("/signup", signUp);

// Login route
authRouter.post("/login", login);

module.exports = authRouter;