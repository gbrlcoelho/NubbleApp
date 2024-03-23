import React from 'react';

import {RadioButtonSelector, Screen} from '@components';
import {AppScreenProps} from '@routes';
import {useSettingsService, useThemePreference} from '@services';

import {options} from './constants';
import {Option} from './types';

export const DarkModeScreen = ({}: AppScreenProps<'DarkModeScreen'>) => {
  const themePreference = useThemePreference();
  const {setThemePreference} = useSettingsService();

  const selectedItem = options.find(
    item => item.themePreference === themePreference,
  );

  const setSelectedItem = (item: Option) => {
    setThemePreference(item.themePreference);
  };

  return (
    <Screen canGoBack title="Modo escuro">
      <RadioButtonSelector
        descriptionKey="description"
        labelKey="label"
        valueKey="label"
        items={options}
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
      />
    </Screen>
  );
};
