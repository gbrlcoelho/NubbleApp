import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {
  return (
    <Screen>
      <Text preset="headingLarge">HomeScreen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Button
        title="Favorites"
        marginTop="s8"
        onPress={() => navigation.navigate('FavoritesScreen')}
      />
    </Screen>
  );
};
