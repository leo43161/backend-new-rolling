import passport from "passport";
import passportLocal from "passport-local";
import Usuario from "../models/user";
import User from "../models/user";
const LocalStrategy = passportLocal.Strategy;

passport.use('local',
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, contrasenia, done) => {
      //Confirmaremos si existe el usuario
      await User.findOne({ email },async (err,usuario)=>{
        if(!usuario){
          done(null, false, { mensaje: "No se encontro un usuario" });
        }else{
          await user.matchContrasenias(contrasenia, (err, sonIguales)=>{
            if(sonIguales){
              return done (null, usuario);
            } else {
              return done (null, false, {message: 'La contraseña no es valida'})
            }
          });
        }
      });
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

exports.estaAutenticado = (req,res, next) =>{
  if (req.isAuthenticated()){
    return next();
  }
  res.status(401).send('Tienes que hacer login para acceder a esta paguina')
}
