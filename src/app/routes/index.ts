import express from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { FacilityRoutes } from '../modules/Facility/facility.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/facility',
    route: FacilityRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
