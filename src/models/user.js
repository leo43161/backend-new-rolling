import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    user: {
      type: String,
      maxlength: 15,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      maxlength: 30,
      unique: true,
      required: true,
    },
    contraseña: {
      type: String,
      maxlength: 30,
      required: true,
    },
    activo: Boolean,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const usuario = this;
  const salt = 12;
  bcrypt.hash(usuario.contraseña, salt, async (err, hash) => {
    if (err) {
      next(err);
    }
    usuario.contraseña = hash;
    next();
  });
});

userSchema.methods.matchContraseñas = async (contraseña) => {
   bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
    // result == true
  });
  return await bcrypt.compare(contraseña, this.contraseña);
};

const Usuario = mongoose.model("Usuario", userSchema);

export default Usuario;
