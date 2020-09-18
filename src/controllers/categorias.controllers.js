const categoriasCtrl = {};
import Categoria from "../models/categoria";

categoriasCtrl.getCategorias = async (req, res) => {
  try {
    const categorias = Categoria.find();
    res.status(200).json(categorias);
  } catch (error) {
    res
      .status(500)
      .json({ mesaje: "Ocurrio un error con intentar solicitar categorias" });
      next(error);
  }
  
};

export default categoriasCtrl