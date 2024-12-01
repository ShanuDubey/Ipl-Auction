const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const url = process.env.MONGO_URL;

const db = mongoose
  .connect(url, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the MongoDB database");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:");
    console.log(error);
  });

module.exports = db;
