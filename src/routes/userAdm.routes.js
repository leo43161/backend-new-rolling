import {Router} from 'express';
const router = Router();
import userAdmController from '../controllers/userAdm.controller';

const { getUserAdm, putUserAdm, postUserAdm } = userAdmController;

router.route("/").get(getUserAdm).post(postUserAdm);
router.route("/:id").put(putUserAdm);

export default router;