const userCtrl = {};
import Usuario from "../models/user";

userCtrl.getUsers = async (req, res) => {
  try {
    const datos = await Usuario.find(); //Busca todos los documentos
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
  }
};

userCtrl.singup = async (req, res) => {
  const {
    nombre,
    email,
    direccion,
    localidad,
    codigoPostal,
    contrasenia,
    activo,
    usuario,
  } = req.body;
  console.log(req.body);
  const userFind = await Usuario.findOne({ email });
  if (userFind) {
    res.status(500).json({ mensajeError: "El usuario ya existe" });
  }
  try {
    const usuarioNuevo = new Usuario({
      nombre,
      email,
      direccion,
      localidad,
      codigoPostal,
      contrasenia,
      activo,
      usuario,
    });
    await usuarioNuevo.save();
    res.status(201).json({ mensaje: "Se creo correctamente" });
  } catch (error) {
    res.status(500).json({
      mensaje: "Fallo al agregar un usuario, intentelo mas tarde",
      error: error,
    });
    next(error);
  }
};


userCtrl.singin = async (req, res) => {
  const { email, contrasenia } = req.body;
  const userFind = await Usuario.findOne({ email });
  if (!userFind) {
    res.status(500).json({ mensaje: "Usuario no encontrado" });
    return;
  }
  try {
    const match = await userFind.matchContrasenias(contrasenia);
    if (match) {
      if (userFind.activo) {
        res.status(201).json({
          mensaje: "Usuario logueado",
          match: match,
          user: userFind,
        });
      } else {
        res.status(403).json({
          mensaje: "Cuenta en estado inactivo",
          match: match,
          user: userFind,
        });
      }
    } else {
      res
        .status(403)
        .json({ mensaje: "La contraseña o el email no coinciden" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
  }
};

/* userCtrl.logout = async (req, res) => {
  try {
    if (userFind) {
      userFind.logueado = false;
      await Usuario.findByIdAndUpdate(userFind._id, userFind);
      res.status(201).json({
        mensaje: "Se hizo el logout correctamente",
      });
    } else {
      res.status(403).json({ mensaje: "No hay ningun usuario logueado" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
  }
}; */

/* userCtrl.logout = async (req, res) => {
  try {
    await Administrador.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({mensaje:"Se realizo el cambio exitosamente"});
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
  }
}; */

export default userCtrl;
