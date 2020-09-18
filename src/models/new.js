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
    },
    descripcion: {
      type: String,
      maxlength: 200,
    },
    contenido: String,
    categoria: {
      type: String,
      maxlength: 20,
    },
    imgPrincipal: String,
    imgSecundaria: String
  },
  { timestamps: true }
);

const New = mongoose.model("new", newSchema);
const NewHighlight = mongoose.model("newhighlight", newSchema);

export { New, NewHighlight };
