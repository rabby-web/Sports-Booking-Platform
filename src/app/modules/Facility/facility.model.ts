import { model, Schema } from 'mongoose';
import { TFacility } from './facility.interface';

const userSchema = new Schema<TFacility>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
export const User = model<TFacility>('Facility', userSchema);
