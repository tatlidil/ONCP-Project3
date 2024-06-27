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
  secret: 'ce9084785d4db3c18f19b103bbba91dae5e3f828a06822cad8804422adddf1877eb2ab7c86eb036f23577e4c8e3025a0068f654ad54ca5195574c73355b1e0ef', // Replace with a secure key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true } 
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
const messageRoutes = require('./routes/api/messageRoutes'); 
const appointmentRoutes = require('./routes/api/appointments');
const contactRoutes = require('./routes/api/contact');


app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/messages', messageRoutes); 
app.use('/api/appointments', appointmentRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
