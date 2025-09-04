const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files (html, css, js)
app.use(express.static(path.join(__dirname)));

// Route home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route dashboard
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
