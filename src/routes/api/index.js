import express from 'express';
import PlaceController from '../../controllers/place-controller';
import upload from '../../utils/multer';
import ROUTES from '../index';

const router = express.Router();

router.get(ROUTES.PLACES, PlaceController.getAll);
router.get(ROUTES.PLACES_ID, PlaceController.getById);
router.get(ROUTES.PLACES_SLUG, PlaceController.getBySlug);
router.post(ROUTES.PLACES, [upload], PlaceController.create);
router.delete(ROUTES.PLACES_ID, PlaceController.deleteAttraction);
router.patch(ROUTES.PLACES_ID, PlaceController.updateAttraction);
router.get(ROUTES.PLACES_CATEGORY, PlaceController.getAttractionByCategory);

export default router;
