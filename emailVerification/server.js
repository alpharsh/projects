const express = require("express"); // Import express
const connectDB = require("./database/db");
const app = express(); // Make express app
require("dotenv").config();
const AuthRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 8000;
app.use(express.json()); // Middleware to parse incoming requests with JSON payloads

// Connect to the database
connectDB();

app.get("/", (req, res) => {
  return res.send(
    "HealthCheck - This is Authentication Testing"
  );
});

// Use the AuthRoutes
app.use("/auth", AuthRoutes);

// Make the app listen for requests on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
