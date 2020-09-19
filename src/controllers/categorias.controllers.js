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

categoriasCtrl.postCategoria = async (req, res) => {
  const { titulo, descripcion } = req.body;
  try {
    const addCategoria = new Categoria({
      titulo,
      descripcion
    });
    await addCategoria.save();
    res.status(201).json({ mensaje: "Se guardo exitosamente" });
  } catch (error) {
    console.log(error + "aqui termian el error");
    res.status(500).json({ mensajeError: "Ocurrio un error" });
    next(error);
  }
};

categoriasCtrl.putCategoria = async (req, res) => {
  try {
    await Categoria.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "La categoria de edito correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar editar la categoria" });
  }
};

categoriasCtrl.getCategoria = async (req, res) => {
  try {
    const categoriaEncontrada = await Categoria.findById(req.params.id);
    res.status(200).json(categoriaEncontrada);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar solicitar una categoria" });
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

export default categoriasCtrl;
