import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const DarkModeScreen = ({}: AppScreenProps<'DarkModeScreen'>) => {
  return (
    <Screen canGoBack title="Modo escuro">
      <Text>DarkModeScreen</Text>
    </Screen>
  );
};
