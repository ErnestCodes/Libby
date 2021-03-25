const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("API running");
});

// Define Routes --> Users Routes
app.use("/api/users", require("./routes/api/users"));

// Define Routes --> Auth Routes
app.use("/api/auth", require("./routes/api/auth"));

// Define Routes --> Profile Routes
app.use("/api/profile", require("./routes/api/profile"));

// Define Routes --> Posts Routes
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
