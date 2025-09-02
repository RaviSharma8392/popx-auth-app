const User = require("../modals/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const signUp = async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      agency
    } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
      companyName,
      agency
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "User registration failed" });
  }
};



const login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role || "user" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set token as cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Change to true in production
      sameSite: "lax",
    });

    // Send success response
    res.status(200).json({
      message: "Login successfull",
      user: {
  id: user._id,
  fullName: user.fullName,
  email: user.email,
  phoneNumber: user.phoneNumber,
  companyName: user.companyName,
  agency: user.agency,
},

      token,
    });

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
};



module.exports = { signUp, login };
