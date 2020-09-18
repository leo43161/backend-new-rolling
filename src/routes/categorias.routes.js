import {Router} from 'express';
const router = Router();
import categoriaControllers from '../controllers/categorias.controllers';

const {getCategorias, postCategoria} = categoriaControllers;

router.route('/').get(getCategorias).post(postCategoria);
router.route('/:titulo').get(getCategorias).post(postCategoria);

export default router;