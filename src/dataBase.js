import mongoose from "mongoose";

const url = "mongodb+srv://leo43:rolling22@cluster0.9z2qy.gcp.mongodb.net/news"; //Cadena de conexion a la base de datos

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
