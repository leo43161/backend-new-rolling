import {Router} from 'express';
const router = Router();
import categoriaControllers from '../controllers/categorias.controllers';

const {getCategorias} = categoriaControllers;

router.route('/').get(getCategorias);

export default router;