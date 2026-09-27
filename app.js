const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");


// Middleware for JSON data
app.use(express.json());


// Custom logger middleware
app.use(logger);


// Student routes
app.use("/students", studentRoutes);


// Home route
app.get("/", (req, res) => {
    res.send("Student Management API is running");
});


// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);

    res.status(500).json({
        message: "Something went wrong"
    });
});


// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});