import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const MyFollowersScreen = ({}: AppScreenProps<'MyFollowersScreen'>) => {
  return (
    <Screen flex={1} title="Seguidores">
      <Text>MyFollowersScreen</Text>
    </Screen>
  );
};
