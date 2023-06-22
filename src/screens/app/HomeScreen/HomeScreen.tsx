import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const HomeScreen = ({navigation}: AppScreenProps<'HomeScreen'>) => {
  return (
    <Screen>
      <Text preset="headingLarge">HomeScreen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
};
