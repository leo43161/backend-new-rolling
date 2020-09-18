import { Router } from "express";
const router = Router();
import newsHighlightsController from "../controllers/newsHighlights.controller";

const {
  getNewsHighlights,
  postNewHighlight,
  getNewHighlight,
  deleteNewHighlight,
  putNewHighlight,
} = newsHighlightsController;

router.route("/").get(getNewsHighlights).post(postNewHighlight);
router
  .route("/:id")
  .delete(deleteNewHighlight)
  .get(getNewHighlight)
  .put(putNewHighlight);

  export default router