const express = require('express');
const databaseConnect = require('./src/config/db');

const cookieParser = require('cookie-parser');
const authRouter = require('./src/routes/authRoutes');
const cors = require('cors');



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
console.log(FRONTEND_URL)

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(cookieParser());


// Routes
app.use("/api/auth", authRouter);



// Connect DB + start server
const serverStart = async () => {
  try {
    await databaseConnect();
    app.listen(port, () => 
      console.log(`🚀 Server running on http://localhost:${port}`)
    );
  } catch (error) {
    console.log("❌ Error connecting server:", error);
  }
};

serverStart();