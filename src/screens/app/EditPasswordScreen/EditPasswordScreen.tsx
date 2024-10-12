import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const EditPasswordScreen =
  ({}: AppScreenProps<'EditPasswordScreen'>) => {
    return (
      <Screen canGoBack scrollable title="Editar Senha">
        <Text preset="headingSmall">Editar Senha</Text>
      </Screen>
    );
  };
