import {schemaTypes} from '@form';
import {z} from 'zod';

export const editPasswordSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: schemaTypes.password,
    confirmedNewPassword: schemaTypes.password,
  })
  .refine(data => data.confirmedNewPassword === data.newPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmedNewPassword'],
  });

export type EditPasswordSchema = z.infer<typeof editPasswordSchema>;
