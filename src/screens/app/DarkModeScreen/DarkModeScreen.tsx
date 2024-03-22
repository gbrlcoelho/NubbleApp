import React, {useState} from 'react';

import {RadioButtonSelector, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {options} from './constants';
import {Option} from './types';

export const DarkModeScreen = ({}: AppScreenProps<'DarkModeScreen'>) => {
  const [selectedItem, setSelectedItem] = useState<Option>();

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
