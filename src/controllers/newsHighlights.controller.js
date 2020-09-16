const newsCtrl = {};
import { NewHighlight } from "../models/new";

newsCtrl.getNewHighlight = async (req, res) => {
  try {
    const datos = await NewHighlight.find(); //Busca todos los documentos
    res.status(200).json(datos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Ocurrio un error" });
  }
};

newsCtrl.postNewHighlight = async (req, res) => {
  const { titulo, autor, descripcion, contenido, categoria, img } = req.body;
  console.log(req.body);
  try {
    const newAdd = new NewHighlight({
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

export default newsCtrl;
