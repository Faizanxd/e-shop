const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database/database");
const mongodbStore = require("connect-mongodb-session");
const session = require("express-session");
const MongoDBStore = mongodbStore(session);

const sessionStore = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017",
  databaseName: "auth-demo",
  collection: "sessions",
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use("/api", require("./routes/authroutes"));

db.connectToDatabase().then(() => {
  app.listen(8000);
});
