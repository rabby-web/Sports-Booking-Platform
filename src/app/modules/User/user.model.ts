/* eslint-disable no-useless-escape */
import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import { USER_ROLE } from './user.constant';

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    //validate email
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      'Please fill a valid email address',
    ],
  },
  password: {
    type: String,
    required: true,
    select: 0,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.keys(USER_ROLE),
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
export const User = model<TUser>('User', userSchema);
