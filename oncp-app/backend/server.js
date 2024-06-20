const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Ensure this path is correct
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' },
  })
);

// Define Routes
app.use('/api/auth', authRoutes); // Ensure this is correctly defined

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
