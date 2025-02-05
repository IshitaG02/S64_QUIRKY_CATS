const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
   .then(() => console.log('Connected to MongoDB Compass'))
   .catch((err) => console.log('Failed to connect:', err)) 
