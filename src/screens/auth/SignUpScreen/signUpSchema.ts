import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'Username inválido').toLowerCase(),
  fullName: z
    .string()
    .min(5, 'Nome muito curto')
    .max(50, 'Nome muito longo')
    .transform(value =>
      value
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' '),
    ),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
