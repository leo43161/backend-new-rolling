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
    contrasenia: {
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

const Usuario = mongoose.model("usuario", userSchema);

export default Usuario;
