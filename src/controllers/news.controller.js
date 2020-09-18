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

newsCtrl.postNew = async (req, res) => {
  const { titulo, autor, descripcion, contenido, categoria, img } = req.body;
  console.log(req.body);
  try {
    const newAdd = new New({
      titulo,
      autor,
      descripcion,
      contenido,
      categoria,
      img,
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

newsCtrl.getNew = async (req, res) => {
  try {
    const noticiaEncontrada = await New.findById(req.params.id);
    res.status(200).json(noticiaEncontrada);
  } catch (error) {
    res.status(500).json({ mensaje:"Ocurrio un error al intentar soliciar un producto"});
    next(error);
  }
};
export default newsCtrl;
