import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const MyFollowingScreen = ({}: AppScreenProps<'MyFollowingScreen'>) => {
  return (
    <Screen flex={1} title="Seguindo">
      <Text>MyFollowingScreen</Text>
    </Screen>
  );
};
