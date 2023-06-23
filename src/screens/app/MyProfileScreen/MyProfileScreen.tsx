import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const MyProfileScreen = ({}: AppTabScreenProps<'MyProfileScreen'>) => {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">MyProfileScreen</Text>
    </Screen>
  );
};
