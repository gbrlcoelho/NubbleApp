import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {ActivityIndicator, Box} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {Stacks, useRouter} from './hooks';
import {OnboardingStack} from './OnboardingStack';

const LoadingScreen = () => {
  return (
    <Box
      flex={1}
      backgroundColor="background"
      justifyContent="center"
      alignItems="center">
      <ActivityIndicator size="large" />
    </Box>
  );
};

const stacks: Record<Stacks, React.ReactElement> = {
  Loading: <LoadingScreen />,
  Onboarding: <OnboardingStack />,
  Auth: <AuthStack />,
  App: <AppStack />,
};

export const Router = () => {
  const router = useRouter();

  const Stack = stacks[router];

  return <NavigationContainer>{Stack}</NavigationContainer>;
};
