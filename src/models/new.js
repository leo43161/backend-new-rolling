import mongoose, { Schema } from "mongoose";

const newSchema = new Schema(
  {
    titulo: {
      type: String,
      maxlength: 100,
      required: true,
    },
    autor: {
      type: String,
      maxlength: 40,
      required: true,
    },
    descripcion: {
      type: String,
      maxlength: 200,
      required: true
    },
    contenido: {
      type: String,
      required: true
    },
    categoria: {
      type: String,
      maxlength: 20,
      required: true
    },
    imgPrincipal: { type: String, required: true },
    pieDeImgPrincipal: {
      type: String,
      maxlength: 100,
      required: true,
    },
    imgSecundaria: String,
    pieDeImgSecundaria: {
      type: String,
      maxlength: 100
    },
    fecha: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const New = mongoose.model("new", newSchema);
const NewHighlight = mongoose.model("newhighlight", newSchema);

export { New, NewHighlight };
