import mongoose, {Schema} from 'mongoose';

const categoriaSchema = new Schema ({
    nombre: {
        type: String,
        maxlength: 20
    },
    descripcion: String
})

const Categoria = mongoose.connect("categorias", categoriaSchema);

export default Categoria;