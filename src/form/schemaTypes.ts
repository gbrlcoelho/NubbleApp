import {z} from 'zod';

import {stringUtils} from '@utils';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,29}$/gim;

const username = z
  .string()
  .min(5, 'Username muito curto')
  .regex(userNameRegex, 'Username inválido')
  .toLowerCase();

const name = z
  .string()
  .min(5, 'Nome muito curto')
  .max(50, 'Nome muito longo')
  .transform(value => stringUtils.capitalizeFirstLetter(value));

const email = z.string().email('Email inválido');

const password = z.string().min(8, 'Senha deve ter no mínimo 8 caracteres');

export const schemaTypes = {
  username,
  name,
  email,
  password,
};
