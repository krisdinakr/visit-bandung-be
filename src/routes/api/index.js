import express from 'express';
import AttractionController from '../../controllers/attraction-controller';
import ROUTES from '../index';

const router = express.Router();

router.get(ROUTES.ATTRACTIONS, AttractionController.getAll);
router.get(ROUTES.ATTRACTIONS_SLUG, AttractionController.getBySlug);
router.post(ROUTES.ATTRACTIONS, AttractionController.create);
router.delete(ROUTES.ATTRACTIONS_ID, AttractionController.deleteAttraction);
router.patch(ROUTES.ATTRACTIONS_ID, AttractionController.updateAttraction);

export default router;
