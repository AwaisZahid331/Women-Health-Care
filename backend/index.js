// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// // Load environment variables
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Atlas connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB Atlas'))
//     .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });






const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const appointmentRoutes = require('./routes/appointmentRoutes');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend')));


// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
app.use('/api', appointmentRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('API is running...');
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
