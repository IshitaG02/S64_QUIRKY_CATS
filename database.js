const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected with server: ${connection.connection.host}`);
    } catch (err) {
        console.error(`Database connection failed: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDatabase;
