import React from 'react';

import {Box, Icon, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import {useAuthCredentials} from '@services';

export const MyProfileScreen = ({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) => {
  const {authCredentials} = useAuthCredentials();
  const name = authCredentials?.user.fullName;
  const navigateToSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <Screen canGoBack>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        {name && <Text preset="headingMedium">{name}</Text>}
        <Icon name="settings" onPress={navigateToSettings} />
      </Box>
    </Screen>
  );
};
