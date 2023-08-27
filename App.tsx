import React from 'react';

// import {ToastProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Router} from '@routes';
import {theme} from '@theme';

export const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* Only use ToastProvider if it is using Context implementation.
          Zustand implementation doesn't need a provider */}
        {/* <ToastProvider> */}
        <Router />
        <Toast />
        {/* </ToastProvider> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
