import {Option} from './types';

export const options: Option[] = [
  {label: 'Ativado', themePreference: 'dark'},
  {label: 'Desativado', themePreference: 'light'},
  {
    label: 'Padrão do sistema',
    description:
      'A aparência será a mesma que você configurou no seu dispositivo',
    themePreference: 'system',
  },
];
