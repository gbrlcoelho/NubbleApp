import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack, AuthStack} from '@routes';
import {useAuthCredentials} from '@services';

export const Router = () => {
  const {authCredentials} = useAuthCredentials();

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
