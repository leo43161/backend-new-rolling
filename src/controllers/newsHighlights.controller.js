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
  const {
    titulo,
    autor,
    descripcion,
    contenido,
    categoria,
    imgPrincipal,
    imgSecundaria,
  } = req.body;
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

newsCtrl.deleteNewHighlight = async (req, res) => {
  try {
    await NewHighlight.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Se elimino correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error al intentar eliminar" });
    next(error);
  }
};

newsCtrl.putNewHighlight = async (req, res) => {
  try {
    await NewHighlight.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({mensaje: "La noticia de edito correctamente"});
  } catch (error) {
    res.status(500).json({mensaje: "Ocurrio un error al intentar editar la noticia"});
  }
}

newsCtrl.getNewHighlight = async (req, res) => {
  try {
    const noticiaEncontrada = await NewHighlight.findById(req.params.id);
    res.status(200).json(noticiaEncontrada);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar soliciar un producto" });
    next(error);
  }
};

export default newsCtrl;
