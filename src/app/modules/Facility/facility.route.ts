import express from 'express';
import { FacilityControllers } from './facility.controller';

const router = express.Router();

export const FacilityRoutes = router;

router.post(
  '/facility',
  //   validateRequest(UserValidation.createUserValidationSchema),
  FacilityControllers.createFacility,
);
