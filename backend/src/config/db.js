const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_URI;

const databaseConnect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = databaseConnect;
