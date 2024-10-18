const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = "YOUR_MONGO_URI";  // Replace with your actual MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 
