import {ThemePreference} from '@services';

export interface Option {
  label: string;
  description?: string;
  themePreference: ThemePreference;
}
