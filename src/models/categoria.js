import mongoose, { Schema } from "mongoose";

const categoriaSchema = new Schema({
  titulo: {
    type: String,
    maxlength: 30,
    unique: true,
    required: true,
  },
  descripcion: {
    type: String,
    maxlength: 150,
    required: true,
  },
});

const Categoria = mongoose.model("categorias", categoriaSchema);

export default Categoria;
