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

const getFacilityById = async (id: string) => {
  const result = await Facility.findById(id);
  return result;
};

export const FacilityService = {
  createFacility,
  getAllFacility,
  getFacilityById,
};
