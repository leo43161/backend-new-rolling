import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import './dataBase';
import newsRouter from './routes/news.routes';
import newsHighlightsRouter from './routes/newsHighlights.routes';
import categoriasRouter from './routes/categorias.routes';
import userAdmRouter from './routes/userAdm.routes';

const app = express();

//midlewares
app.use(morgan("dev")); //Me permite ver la informacion en la consola
app.use(cors()); //Permite poder aceptar las conexiones remotas, enviar y recibir datos
app.use(express.json()); //Permite al servidor entender formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public"))); //Esto permite que se pueda acceder a la carpeta public

//definimos una variable "port"
app.set("port", process.env.PORT || 4000);

//defino mi ruta principal
app.use('/news', newsRouter);
app.use('/highlights', newsHighlightsRouter);
app.use('/categorias', categoriasRouter);
app.use('/usersAdm', userAdmRouter)

//Escucho el puerto
app.listen(app.get("port"), () => {
  console.log(path.join(__dirname, "../public"));
  console.log("Servidor en el puerto", +app.get("port"));
  console.log("Parece ser un gran año para Zac Efron. Primero, el actor estrenó en julio su serie documental “Con los pies sobre la tierra”, y, ahora, parece que su vida personal ha ido floreciendo muy bien".length)
});
