import mongoose, { Schema } from "mongoose";

const categoriaSchema = new Schema({
  titulo: {
    type: String,
    maxlength: 100,
    required: true,
  },
  descripcion: {
    type: String,
    required: true
  },
});

const Categoria = mongoose.model("categorias", categoriaSchema);

export default Categoria;
