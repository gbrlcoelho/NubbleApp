import {ColorSchemeName} from 'react-native';

export type AppColorScheme = 'light' | 'dark';

export type ThemePreference = AppColorScheme | 'system';

export type SettingsStore = {
  appColorScheme: AppColorScheme;
  themePreference: ThemePreference;
  showOnboarding: boolean;
  setThemePreference: (themePreference: ThemePreference) => void;
  onSystemChange: (colorScheme: ColorSchemeName) => void;
  onFinishOnboarding: () => void;
};
