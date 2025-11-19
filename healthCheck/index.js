const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Health check endpoint with random status
app.get("/health", (req, res) => {
  const healthy = Math.random() > 0.5; // 50% chance healthy, 50% unhealthy
  
  if (healthy) {
    console.log("✅ Health check: HEALTHY");
    res.status(200).send("OK");
  } else {
    console.log("❌ Health check: UNHEALTHY");
    res.status(500).send("NOT OK");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
