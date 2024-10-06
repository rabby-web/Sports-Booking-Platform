import express from 'express';

const router = express.Router();

export const UserRoutes = router;

router.post(
  '/facility',
  //   validateRequest(UserValidation.createUserValidationSchema),
    FacilitiyControllers.createFacility,
);
