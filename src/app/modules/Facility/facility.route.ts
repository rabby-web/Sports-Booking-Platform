import express from 'express';
import { FacilityControllers } from './facility.controller';
import validateRequest from '../../middlewares/validateRequest';
import { FacilityValidation } from './facility.validaton';

const router = express.Router();

export const FacilityRoutes = router;

router.post(
  '/facility',
  validateRequest(FacilityValidation.createFacilityValidationSchema),
  FacilityControllers.createFacility,
);
