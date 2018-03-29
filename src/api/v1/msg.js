import express from 'express';
import MessageController from '../../controllers/MessageController';

const router = express.Router();

router.route('/create').post(MessageController.create);

export default router;