import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    nombre: {
      type: String,
      maxlength: 60,
      required: true,
    },
    email: {
      type: String,
      maxlength: 40,
      required: true,
      unique: true,
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
      type: String,
      maxlength: 10,
      required: true,
    },
    contrasenia: {
      type: String,
      required: true,
    },
    activo: Boolean,
    logueado: Boolean,
    usuario: Number,
  },
  {
    timestamps: {
      type: Number,
      maxlength: 1,
      required: true,
    },
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
  } else {
    next();
  }
});

userSchema.methods.matchContrasenias = async function (contrasenia) {
  return await bcrypt.compare(contrasenia, this.contrasenia);
};

userSchema.methods.cambiarActivo = async function () {
  const usuario = this;
  if (usuario.activo) {
    return (usuario.activo = false);
  } else {
    return (usuario.activo = true);
  }
};

/* userSchema.method("cambiarLogueado", function () {
  const usuario = this;
  if (usuario.activo) {
    usuario.logueado = false;
  } else {
    usuario.logueado = true;
  }
}); */

userSchema.methods.cambiarLogueado = function (cb) {
  const usuario = this;
  if (usuario.activo) {
    usuario.logueado = false;
  } else {
    usuario.logueado = true;
  }
};

const Usuario = mongoose.model("usuario", userSchema);

export default Usuario;
