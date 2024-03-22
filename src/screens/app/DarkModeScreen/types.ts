type ThemePreference = 'light' | 'dark' | 'system';

export interface Option {
  label: string;
  description?: string;
  themePreference: ThemePreference;
}
