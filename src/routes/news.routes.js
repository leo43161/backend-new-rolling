import {Router} from 'express';
const router = Router();
import newsController from '../controllers/news.controller';

const { getNews } = newsController;

router.route("/").get(getNews);

export default router;