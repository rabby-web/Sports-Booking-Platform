// import { z } from 'zod';
// import { USER_ROLE } from './user.constant';

// const createUserValidationSchema = z.object({
//   body: z.object({
//     name: z.string({
//       required_error: 'Name is required',
//     }),
//     role: z.nativeEnum(USER_ROLE),
//     email: z
//       .string({
//         required_error: 'Email is required',
//       })
//       .email({
//         message: 'Invalid email',
//       }),
//     password: z.string({
//       required_error: 'Password is required',
//     }),
//     phone: z.string().optional(),
//     address: z.string().optional(),
//   }),
// });

// const updateUserValidationSchema = z.object({
//   body: z.object({
//     name: z.string().optional(),
//     role: z.nativeEnum(USER_ROLE).optional(),
//     email: z.string().email().optional(),
//     password: z.string().optional(),
//     phone: z.string().optional(),
//     address: z.string().optional(),
//   }),
// });

// export const UserValidation = {
//   createUserValidationSchema,
//   updateUserValidationSchema,
// };
