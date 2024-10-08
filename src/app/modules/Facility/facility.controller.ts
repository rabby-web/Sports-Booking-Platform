import httpStatus from 'http-status';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { FacilityService } from './facility.service';

const createFacility = catchAsync(async (req, res) => {
  const itemFacility = await FacilityService.createFacility(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Facility Created Successfully',
    data: itemFacility,
  });
});

const getAllFacility = catchAsync(async (req, res) => {
  const itemFacility = await FacilityService.getAllFacility();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Item Category Retrieved Successfully',
    data: itemFacility,
  });
});

const getFacilityById = catchAsync(async (req, res) => {
  const { facilityId } = req.params;
  const result = await FacilityService.getFacilityById(facilityId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Item Category Retrieved Successfully',
    data: result,
  });
});

export const FacilityControllers = {
  createFacility,
  getAllFacility,
  getFacilityById,
};
