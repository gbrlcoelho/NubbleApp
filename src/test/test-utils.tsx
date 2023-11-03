import React, {FC, ReactElement, ReactNode} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RenderOptions, render} from '@testing-library/react-native';

import {theme} from '@theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
    mutations: {
      retry: false,
      cacheTime: Infinity,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    // @ts-ignore
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
});

export const AllTheProviders: FC<{children: ReactNode}> = ({children}) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  </QueryClientProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';

export {customRender as render};
