const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database/database");
const mongodbStore = require("connect-mongodb-session");
const session = require("express-session");
const { authCheck } = require("./middlewares/auth");
const { adminCheck } = require("./middlewares/admin");
const MongoDBStore = mongodbStore(session);

const sessionStore = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017",
  databaseName: "auth-demo",
  collection: "sessions",
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("images"));

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

app.use(async (req, res, next) => {
  const user = req.session.user;
  const isAuth = req.session.isAuthenticated;

  if (!user || !isAuth) {
    return next();
  }
  const userDoc = await db
    .getDb()
    .collection("users")
    .findOne({ _id: user.id });
  const isAdmin = userDoc.isAdmin;

  res.locals.isAuth = isAuth;
  res.locals.isAdmin = isAdmin;

  next();
});

app.use(require("./routes/authroutes"));
// app.use(authCheck);
app.use(require("./routes/userroutes"));
// app.use(adminCheck);
app.use(require("./routes/adminroutes"));

db.connectToDatabase().then(() => {
  app.listen(8000);
});
