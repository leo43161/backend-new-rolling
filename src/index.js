import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./dataBase";
import newsRouter from "./routes/news.routes";
import newsHighlightsRouter from "./routes/newsHighlights.routes";
import categoriasRouter from "./routes/categorias.routes";
import userAdmRouter from "./routes/userAdm.routes";
import usersRouter from "./routes/user.routes";
import "./config/sessions";
const app = express();

/* const MONGO_URL =
  "mongodb+srv://leo43:rolling22@cluster0.9z2qy.gcp.mongodb.net/news"; */

//midlewares
app.use(morgan("dev")); //Me permite ver la informacion en la consola
app.use(cors()); //Permite poder aceptar las conexiones remotas, enviar y recibir datos
app.use(express.json()); //Permite al servidor entender formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public"))); //Esto permite que se pueda acceder a la carpeta public


//definimos una variable "port"
app.set("port", process.env.PORT || 4000);

//defino mi ruta principal
app.use("/news", newsRouter);
app.use("/highlights", newsHighlightsRouter);
app.use("/categorias", categoriasRouter);
app.use("/adm", userAdmRouter);
app.use("/users", usersRouter);


app.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      err(null, false, { mensaje: "Se a deslogueado" });
    }
    res.status(200).json({ mensaje: "Se a deslogueado" });
  });
});



//Escucho el puerto
app.listen(app.get("port"), () => {
  console.log(path.join(__dirname, "../public"));
  console.log("Servidor en el puerto", +app.get("port"));
});
