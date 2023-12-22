import React from 'react';

import {Icon, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

export const SearchScreen = ({}: AppScreenProps<'SearchScreen'>) => {
  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value=""
          onChangeText={() => {}}
          LeftComponent={<Icon name="search" color="gray3" />}
        />
      }>
      <Text>SearchScreen</Text>
    </Screen>
  );
};
