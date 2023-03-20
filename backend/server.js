const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database/database");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/authroutes"));

db.connectToDatabase().then(() => {
  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
});
