import mongoose, {Schema} from 'mongoose';

const categoriaSchema = new Schema ({
    titulo: {
        type: String,
        maxlength: 20,
        unique: true
    },
    descripcion: String
})

const Categoria = mongoose.model("categorias", categoriaSchema);

export default Categoria;