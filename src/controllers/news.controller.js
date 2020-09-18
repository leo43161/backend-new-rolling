const newsCtrl = {};
import { New } from "../models/new";

newsCtrl.getNews = async (req, res) => {
  try {
    const datos = await New.find(); //Busca todos los documentos
    res.status(200).json(datos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
  }
};

//Funcion que sirve para poder subir una noticia a la base de datos

newsCtrl.postNew = async (req, res) => {
  const {
    titulo,
    autor,
    descripcion,
    contenido,
    categoria,
    imgPrincipal,
    imgSecundaria,
  } = req.body;
  console.log(req.body);
  try {
    const newAdd = new New({
      titulo,
      autor,
      descripcion,
      contenido,
      categoria,
      imgPrincipal,
      imgSecundaria,
    });
    await newAdd.save();
    res.status(201).json({ mensaje: "Se envio correctamente" });
  } catch (error) {
    res.status(500).json({ mensajeError: "Fallo al agregar una Noticia" });
    next(error);
  }
};

newsCtrl.deleteNew = async (req, res) => {
  try {
    await New.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Se elimino correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error al intentar eliminar" });
    next(error);
  }
};

newsCtrl.putNew = async (req, res) => {
  try {
    await New.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({mensaje: "La noticia de edito correctamente"});
  } catch (error) {
    res.status(500).json({mensaje: "Ocurrio un error al intentar editar la noticia"});
  }
}

newsCtrl.getNew = async (req, res) => {
  try {
    const noticiaEncontrada = await New.findById(req.params.id);
    res.status(200).json(noticiaEncontrada);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar solicitar un producto" });
    next(error);
  }
};
export default newsCtrl;
