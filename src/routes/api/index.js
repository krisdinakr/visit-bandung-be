import express from 'express';
import AttractionController from '../../controllers/attraction-controller';
import ROUTES from '../index';

const router = express.Router();

router.get(ROUTES.ATTRACTIONS, AttractionController.getAll);
router.get(ROUTES.ATTRACTIONS_SLUG, AttractionController.getBySlug);

export default router;
