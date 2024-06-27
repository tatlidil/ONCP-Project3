const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // Load .env file

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// Session setup
app.use(session({
  secret: 'your_secret_key', // Replace with a secure key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure: true if using https
}));

// Connect to MongoDB
const db = config.get('mongoURI');
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define Routes
const userRoutes = require('./routes/api/user');
const authRoutes = require('./routes/api/auth');
const prescriptionRoutes = require('./routes/api/prescriptions');
const messageRoutes = require('./routes/api/messageRoutes'); // Import message routes

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/messages', messageRoutes); // Use message routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));