import express from "express";
import session from "express-session";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./dataBase";
const MongoStore = require("connect-mongo")(session);
import newsRouter from "./routes/news.routes";
import newsHighlightsRouter from "./routes/newsHighlights.routes";
import categoriasRouter from "./routes/categorias.routes";
import userAdmRouter from "./routes/userAdm.routes";
import usersRouter from "./routes/user.routes";
/* import passport from "passport"; */
import bodyParser from "body-parser";
import "./config/passport";
const app = express();

const MONGO_URL =
  "mongodb+srv://leo43:rolling22@cluster0.9z2qy.gcp.mongodb.net/news";

//midlewares
app.use(morgan("dev")); //Me permite ver la informacion en la consola
app.use(cors()); //Permite poder aceptar las conexiones remotas, enviar y recibir datos
app.use(express.json()); //Permite al servidor entender formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public"))); //Esto permite que se pueda acceder a la carpeta public
app.use(
  session({
    secret: "ESTO ES SECRETO",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      url: MONGO_URL,
      autoReconnect: true,
    }),
    cookie: { maxAge: 50000 }
  })
);
/* app.use(passport.initialize());
app.use(passport.session()); */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//definimos una variable "port"
app.set("port", process.env.PORT || 4000);

//defino mi ruta principal
app.use("/news", newsRouter);
app.use("/highlights", newsHighlightsRouter);
app.use("/categorias", categoriasRouter);
app.use("/adm", userAdmRouter);
app.use("/users", usersRouter);

app.get("/login", (req, res) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
  res.send(`Hola! has visto esta pagina ${req.session.cuenta}`);
});
//Escucho el puerto
app.listen(app.get("port"), () => {
  console.log(path.join(__dirname, "../public"));
  console.log("Servidor en el puerto", +app.get("port"));
});
