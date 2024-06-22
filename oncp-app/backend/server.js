const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const db = config.get('mongoURI');
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define Routes
const userRoutes = require('./routes/api/users');
const authRoutes = require('./routes/api/auth');
const prescriptionRoutes = require('./routes/api/prescriptions');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/prescriptions', prescriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));