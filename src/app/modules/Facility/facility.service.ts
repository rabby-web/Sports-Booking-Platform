import { TFacility } from './facility.interface';
import { Facility } from './facility.model';

const createFacility = async (facility: TFacility) => {
  const result = await Facility.create(facility);
  return result;
};

const getAllFacility = async () => {
  const result = await Facility.find();
  return result;
};

export const FacilityService = {
  createFacility,
  getAllFacility,
};
