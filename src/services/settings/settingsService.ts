import {Appearance, ColorSchemeName, Platform, StatusBar} from 'react-native';

import {colors} from '@theme';

import {AppColorScheme, ThemePreference} from './settingsType';

const onChangeThemePreference = (
  themePreference: ThemePreference,
): AppColorScheme => {
  if (themePreference === 'system') {
    const colorScheme = Appearance.getColorScheme();
    return colorScheme ? colorScheme : 'light';
  }

  return themePreference;
};

const onSystemChange = (
  colorScheme: ColorSchemeName,
  themePreference: ThemePreference,
): AppColorScheme | null => {
  if (themePreference === 'system') {
    return colorScheme ? colorScheme : 'light';
  }

  return null;
};

const handleStatusBarStyle = (colorScheme: AppColorScheme) => {
  StatusBar.setBarStyle(
    colorScheme === 'dark' ? 'light-content' : 'dark-content',
    true,
  );

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(
      colorScheme === 'dark'
        ? colors.palette.grayBlack
        : colors.palette.grayWhite,
    );
  }
};

export const settingsService = {
  onChangeThemePreference,
  onSystemChange,
  handleStatusBarStyle,
};
