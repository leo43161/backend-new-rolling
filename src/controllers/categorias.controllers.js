const categoriasCtrl = {};
import Categoria from "../models/categoria";

categoriasCtrl.getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.status(200).json(categorias);
  } catch (error) {
    res
      .status(500)
      .json({ mesaje: "Ocurrio un error con intentar solicitar categorias" });
    next(error);
  }
};

//Funcion que sirve para poder subir una noticia a la base de datos

categoriasCtrl.postCategoria = async (req, res) => {
    const {
      titulo,
      descripcion,
    } = req.body;
    try {
      const categoriaAdd = new Categoria({
        titulo,
        descripcion,
      });
      await categoriaAdd.save();
      res.status(201).json({ mensaje: "Se envio correctamente" });
    } catch (error) {
      res.status(500).json({ mensajeError: "Fallo al agregar una categoria" });
      next(error);
    }
  };
  
  categoriasCtrl.deleteCategoria = async (req, res) => {
    try {
      await Categoria.findByIdAndDelete(req.params.id);
      res.status(200).json({ mensaje: "Se elimino correctamente" });
    } catch (error) {
      res.status(500).json({ mensaje: "Ocurrio un error al intentar eliminar" });
      next(error);
    }
  };
  
  categoriasCtrl.putCategoria = async (req, res) => {
    try {
      await Categoria.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({mensaje: "La noticia de edito correctamente"});
    } catch (error) {
      res.status(500).json({mensaje: "Ocurrio un error al intentar editar la noticia"});
    }
  }
  
  categoriasCtrl.getCategoria = async (req, res) => {
    try {
      const noticiaEncontrada = await Categoria.findById(req.params.id);
      res.status(200).json(noticiaEncontrada);
    } catch (error) {
      res
        .status(500)
        .json({ mensaje: "Ocurrio un error al intentar solicitar un producto" });
      next(error);
    }
  };

export default categoriasCtrl;
