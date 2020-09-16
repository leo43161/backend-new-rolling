import mongoose from "mongoose";

const url = "mongodb://localhost:27017/news"; //Cadena de conexion a la base de datos

//Definimos que operaciones se puede hacer a la base de datos
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

const conexion = mongoose.connection;

conexion.once("open", () => {
  console.log("DB conectada");
});
