import mongoose, { Schema } from "mongoose";

const userAdmSchema = new Schema({
  userAdm: {
    type: String,
    maxlength: 15,
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
    unique: true,
    required: true,
  },
  logueado: Boolean,
  activo:Boolean

});

const userAdmSchema = mongoose.model("administrador", userAdmSchema);

export default Categoria;