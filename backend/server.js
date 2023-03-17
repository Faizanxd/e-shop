const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(5173, () => console.log("Server running on port 5000"));

// Path: frontend\index.htm
