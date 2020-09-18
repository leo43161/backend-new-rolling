import {Router} from 'express';
const router = Router();
import categoriaControllers from '../controllers/categorias.controllers';

const {getCategorias, postCategoria, deleteCategoria, getCategoria} = categoriaControllers;

router.route('/').get(getCategorias).post(postCategoria);
router.route('/:titulo').get(getCategorias).delete(deleteCategoria)
export default router;