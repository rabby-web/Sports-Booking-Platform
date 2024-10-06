import { z } from 'zod';

const createFacilityValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    pricePerHour: z.string({
      required_error: 'Price is required',
    }),
    location: z.string({
      required_error: 'Location is required',
    }),
  }),
});

export const FacilityValidation = {
  createFacilityValidationSchema,
};
