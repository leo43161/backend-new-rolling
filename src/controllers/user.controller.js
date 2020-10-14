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
  const { user, email, contrasenia } = req.body;
  const emailUser = await Usuario.findOne({ email: email });
  if (emailUser) {
    return res.status(500).json({ mensaje: "El usuario ya esta registrado" });
  }
  const nuevoUsuario = new Usuario({
    user,
    email,
    contrasenia,
    activo: false,
  });
  try {
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: "Se envio correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
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
    next(true);
  }
  try {
    const match = await userFind.matchContrasenias(contrasenia);
    console.log(match)
    if(match){
      res
      .status(201)
      .json({ mensaje: "La contraseñas son iguales", "match": match });
    }else{
      res.status(500).json({ mensaje: "La contraseña o el email no coinciden" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
  }
};

userCtrl.logout = (req, res) => {
  req.logout();
  res.send("Logout existoso");
};

export default userCtrl;
