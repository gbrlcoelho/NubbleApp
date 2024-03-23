import React, {useEffect} from 'react';
// import {ToastProvider} from '@services';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {useAppColorScheme} from '@hooks';
import {Router} from '@routes';
import {settingsService, useAppColor} from '@services';
import {darkTheme, theme} from '@theme';

import {AuthCredentialsProvider} from './src/services/authCredentials';
import {MMKVStorage, initializeStorage} from './src/services/storage';

const queryClient = new QueryClient();

initializeStorage(MMKVStorage);

export const App = () => {
  const appColor = useAppColor();

  useAppColorScheme();

  useEffect(() => {
    settingsService.handleStatusBarStyle(appColor);
  }, [appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
            {/* Only use ToastProvider if it is using Context implementation.
          Zustand implementation doesn't need a provider */}
            {/* <ToastProvider> */}
            <Router />
            <Toast />
            {/* </ToastProvider> */}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
};
