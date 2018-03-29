import express from 'express';
import apiV1 from './v1';

export default () => {
  const router = express.Router();
  router.use('/v1', apiV1());

  return router;
};
