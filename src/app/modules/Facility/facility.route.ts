import express from 'express';
import { FacilityControllers } from './facility.controller';
import validateRequest from '../../middlewares/validateRequest';
import { FacilityValidation } from './facility.validation';

const router = express.Router();

export const FacilityRoutes = router;

router.get('/', FacilityControllers.getAllFacility);


router.get('/:id', FacilityControllers.getFacilityById);

router.post(
  '/facility',
  validateRequest(FacilityValidation.createFacilityValidationSchema),
  FacilityControllers.createFacility,
);
