const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.ENV || "development";

app.get("/", (req, res) => {
  res.send(`Hello World nurfaidzy, running in ${ENV} mode`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} mode`);
});
