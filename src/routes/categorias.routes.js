import { Router } from "express";
const router = Router();
import categoriaControllers from "../controllers/categorias.controllers";

const {
  getCategorias,
  postCategoria,
  deleteCategoria,
  getCategoria,
  putCategoria,
} = categoriaControllers;

router.route("/").get(getCategorias).post(postCategoria);
router
  .route("/:id")
  .get(getCategoria)
  .delete(deleteCategoria)
  .put(putCategoria);
export default router;
