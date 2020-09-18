import {Router} from 'express';
const router = Router();
import newsController from '../controllers/news.controller';
import newsHighlightsController from '../controllers/newsHighlights.controller';

const { getNews, postNew, deleteNew, getNew, putNew } = newsController;

router.route("/").get(getNews).post(postNew);
router.route("/:id").delete(deleteNew).get(getNew).put(putNew);

export default router;