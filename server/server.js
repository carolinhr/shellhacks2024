const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
require("dotenv").config();


const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));
//use rate limiter here
// app.use(rateLimiter);


app.use(cors({
  origin:
  
  
  process.env.FRONTEND_URL, // Adjust as per your frontend URL
}));


const userRoutes = require("./Routes/userRoutes");
const postRoutes = require("./Routes/postRoutes")


// Routes
app.use("/users", userRoutes);
app.use("/post", postRoutes)





app.get("/", (req, res) => {
    res.send("Hello from the other side");
  });

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});