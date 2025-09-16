import { Router } from 'express';
import { getAllListings } from '../controllers/listingsController';

const router = Router();
router.get('/', getAllListings);

export default router;