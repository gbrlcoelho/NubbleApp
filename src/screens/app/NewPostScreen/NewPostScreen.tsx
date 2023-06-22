import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const NewPostScreen = ({}: AppTabScreenProps<'NewPostScreen'>) => {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">NewPostScreen</Text>
    </Screen>
  );
};
