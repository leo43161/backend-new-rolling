import {Router} from 'express';
const router = Router();
import newsController from '../controllers/news.controller';
import newsHighlightsController from '../controllers/newsHighlights.controller';

const { getNews, postNew, deleteNew, getNew, putNew } = newsController;
const { postNewHighlight, getNewHighlight } = newsHighlightsController;

router.route("/").get(getNews).post(postNew);
router.route("/:id").delete(deleteNew).get(getNew).put(putNew);
router.route("/highlights").get(getNewHighlight).post(postNewHighlight);

export default router;