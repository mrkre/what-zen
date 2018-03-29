import express from 'express';
import msg from './msg';

export default () => {
  const router = express.Router();

  router.use('/', msg);

  return router;
};