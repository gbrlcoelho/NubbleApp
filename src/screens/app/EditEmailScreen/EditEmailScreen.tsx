import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const EditEmailScreen = ({}: AppScreenProps<'EditEmailScreen'>) => {
  return (
    <Screen canGoBack scrollable title="Editar Email">
      <Text preset="headingSmall">Editar Email</Text>
    </Screen>
  );
};
