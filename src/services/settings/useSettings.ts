import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {settingsService} from './settingsService';
import {AppColorScheme, SettingsStore, ThemePreference} from './settingsType';

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      appColorScheme: 'light',
      themePreference: 'system',
      onSystemChange: colorScheme => {
        const updatedAppColorScheme = settingsService.onSystemChange(
          colorScheme,
          get().themePreference,
        );
        if (updatedAppColorScheme) {
          set({appColorScheme: updatedAppColorScheme});
        }
      },
      setThemePreference: themePreference => {
        const updatedAppColorScheme =
          settingsService.onChangeThemePreference(themePreference);
        set({appColorScheme: updatedAppColorScheme, themePreference});
      },
    }),
    {
      name: '@Settings',
      storage: storage,
    },
  ),
);

export const useAppColor = (): AppColorScheme =>
  useSettingsStore(state => state.appColorScheme);

export const useThemePreference = (): ThemePreference =>
  useSettingsStore(state => state.themePreference);

export const useSettingsService = (): Pick<
  SettingsStore,
  'onSystemChange' | 'setThemePreference'
> => {
  const setThemePreference = useSettingsStore(
    state => state.setThemePreference,
  );

  const onSystemChange = useSettingsStore(state => state.onSystemChange);

  return {onSystemChange, setThemePreference};
};
