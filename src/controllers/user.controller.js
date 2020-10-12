const userCtrl = {};
import Usuario from "../models/user";
import passport from "passport";

userCtrl.singup = async (req, res) => {
  const { user, email, contraseña } = req.body;
  const emailUser = await Usuario.findOne({ email: email });
  if (emailUser) {
    return res.status(500).json({ mensaje: "El usuario ya esta registrado" });
  }
  const nuevoUsuario = new Usuario({
    user,
    email,
    contraseña,
    activo: false,
  });
  try {
    await nuevoUsuario.save();
    res
      .status(201)
      .json({ mensaje: "Se envio correctamente"});
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrio un error" });
    next(error);
  }
};

userCtrl.login = (req, res) => {
  res.send("Login");
};

userCtrl.singin = passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/',
    failureFlash:true
})

userCtrl.logout = (req, res) => {
  res.send("Logout");
};

export default userCtrl;
