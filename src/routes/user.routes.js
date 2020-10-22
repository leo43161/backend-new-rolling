import {Router} from 'express';
const router = Router();
import usersController from '../controllers/user.controller'

const { singup, singin, getUsers, logout } = usersController

router.route('/singup').post(singup);
router.route('/').get(getUsers);
router.route('/singin').post(singin);
router.route('/logout').get(logout);

export default router;