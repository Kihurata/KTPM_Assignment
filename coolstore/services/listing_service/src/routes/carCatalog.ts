import { Router } from 'express';
// import { getAllListings } from '../controllers/listingsController';
import { getAllCarModels, getAllCarVariant, getAllMedia } from '../controllers/carModelController';

const router = Router();

router.get('/car-models',getAllCarModels)
router.get('/car-variant',getAllCarVariant)
router.get('/media',getAllMedia)

export default router;