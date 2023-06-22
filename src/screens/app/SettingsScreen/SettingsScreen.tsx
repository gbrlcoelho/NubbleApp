import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const SettingsScreen = ({}: AppScreenProps<'SettingsScreen'>) => {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">SettingsScreen</Text>
    </Screen>
  );
};
