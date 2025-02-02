const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is Connected");
  } catch (error) {
    console.error("MongoDB connection FAIL");
  }
};

module.exports = connectDB;
