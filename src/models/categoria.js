import mongoose, {Schema} from 'mongoose';

const categoriaSchema = new Schema ({
    titulo: {
        type: String,
        maxlength: 20
    },
    descripcion: String
})

const Categoria = mongoose.model("categorias", categoriaSchema);

export default Categoria;