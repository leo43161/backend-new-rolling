import mongoose, {Schema} from 'mongoose';

const categoriaSchema = new Schema ({
    titulo: {
        type: String,
        maxlength: 20,
        unique: true
    },
    descripcion: {
        type: String,
        maxlength: 150,
        unique: true
    },
})

const Categoria = mongoose.model("categorias", categoriaSchema);

export default Categoria;