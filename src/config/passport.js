import passport from "passport";
import passportLocal from "passport-local";
import User from "../models/user";
const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "contraseña",
    },
    async (email, contraseña, done) => {
      //Confirmaremos si existe el usuario
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { mensaje: "No se encontro un usuario" });
      } else {
        // Validando la contraseña
        const match = await user.matchContraseñas(contraseña);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { mensaje: "Contraseña Incorrecta" });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
