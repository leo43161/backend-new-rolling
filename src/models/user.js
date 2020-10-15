import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    nombre: {
      type: String,
      maxlength: 50,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      maxlength: 30,
      unique: true,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    localidad: {
      type: String,
      required: true,
    },
    codigoPostal: {
      type: Number,
      maxlength: 10,
      required: true,
    },
    contrasenia: {
      type: String,
      minlength: 8,
      required: true,
    },
    activo: Boolean,
    logueado: Boolean,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const usuario = this;
  const salt = 12;
  if (usuario.isNew || usuario.isModified("contrasenia")) {
    bcrypt.hash(usuario.contrasenia, salt, async (err, hash) => {
      if (err) {
        next(err);
      }
      usuario.contrasenia = hash;
      next();
    });
  }else{
    next()
  }
});

userSchema.methods.matchContrasenias = async function (contrasenia) {
  return await bcrypt.compare(contrasenia, this.contrasenia)
};

userSchema.methods.cambiarActivo = async function () {
  const usuario = this;
  if(usuario.activo){
    usuario.logueado = false;
    next();
  }else{
    usuario.logueado = true;
    next();
  }
};

const Usuario = mongoose.model("usuario", userSchema);

export default Usuario;
