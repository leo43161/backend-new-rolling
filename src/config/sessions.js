/* import express from "express";
import session from "express-session";
const MongoStore = require("connect-mongo")(session);

const app = express();

const MONGO_URL =
  "mongodb+srv://leo43:rolling22@cluster0.9z2qy.gcp.mongodb.net/news";

app.use(
  session({
    secret: "ESTO ES SECRETO",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      url: MONGO_URL,
      autoReconnect: true,
    }),
    name: "session",
  })
); */