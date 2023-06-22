import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const FavoritesScreen = ({}: AppTabScreenProps<'FavoritesScreen'>) => {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">FavoriteScreen</Text>
    </Screen>
  );
};
