const userAdmCtrl = {};
import Administrador from "../models/userAdm";

userAdmCtrl.getUserAdm = async (req, res) => {
  try {
    const datos = await Administrador.find(); //Busca todos los documentos
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
  }
};

userAdmCtrl.postUserAdm = async (req, res) => {
  const { userAdm, email, contraseña, logueado, activo } = req.body;
  try {
    const userAdd = new Administrador({
      userAdm,
      email,
      contraseña,
      logueado,
      activo,
    });
    await userAdd.save();
    res.status(201).json({ mensaje: "Se envio correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ mensajeError: "Fallo al agregar una Usuario administrador" });
    next(error);
  }
};

userAdmCtrl.putUserAdm = async (req, res) => {
  try {
    await Administrador.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({mensaje:"Se realizo el cambio exitosamente"});
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
  }
};

export default userAdmCtrl;
