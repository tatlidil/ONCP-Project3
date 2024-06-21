const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth'); // Assuming you have defined auth routes

require('dotenv').config();

const app = express();

<<<<<<< Updated upstream
// Connect Database
connectDB();

=======
>>>>>>> Stashed changes
// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' },
  })
);

<<<<<<< Updated upstream
// Define Routes
=======
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
>>>>>>> Stashed changes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start server
const PORT = process.env.PORT || 5000;
<<<<<<< Updated upstream
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
>>>>>>> Stashed changes
