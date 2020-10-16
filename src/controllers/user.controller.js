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
    logueado,
    usuario
  } = req.body;
  console.log(req.body);
  const userFind = await Usuario.findOne({ email });
  if(userFind){
    res.status(500).json({ mensajeError: "El usuario ya existe"});
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
      logueado,
      usuario
    });
    await usuarioNuevo.save();
    res.status(201).json({ mensaje: "Se creo correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Fallo al agregar un usuario, intentelo mas tarde", error: error });
    next(error)
  }
};

userCtrl.login = (req, res) => {
  res.send("Login");
};

userCtrl.singin = async (req, res) => {
  const { email, contrasenia } = req.body;
  const userFind = await Usuario.findOne({ email });
  console.log(userFind);
  if (!userFind) {
    res.status(500).json({ mensaje: "Usuario no encontrado" });
    return
  }
  try {
    const match = await userFind.matchContrasenias(contrasenia);
    console.log(match);
    if (match) {
      userFind.cambiarLogueado();
      res.status(201).json({
        mensaje: "La contraseñas son iguales",
        match: match,
        user: userFind,
      });
    } else {
      res
        .status(500)
        .json({ mensaje: "La contraseña o el email no coinciden" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
  }
};

userCtrl.logout = async (req, res) => {
  const userFind = await Usuario.findOne({ activo: false });
  console.log(userFind);
};

export default userCtrl;
