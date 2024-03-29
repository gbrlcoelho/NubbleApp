import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native';

import {Toast} from '@components';
import {AuthCredentialsProvider} from '@services';
import {theme} from '@theme';

const queryClientConfig: QueryClientConfig = {
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
};

export const wrapAllProviders = () => {
  const queryClient = new QueryClient(queryClientConfig);

  return ({children}: {children: React.ReactNode}) => {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>{children}</NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    );
  };
};
export const wrapScreenProviders = () => {
  const queryClient = new QueryClient(queryClientConfig);

  return ({children}: {children: React.ReactNode}) => {
    return (
      <AuthCredentialsProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <NavigationContainer>{children}</NavigationContainer>
            <Toast />
          </ThemeProvider>
        </QueryClientProvider>
      </AuthCredentialsProvider>
    );
  };
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: wrapAllProviders(), ...options});

export const renderScreen = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: wrapScreenProviders(), ...options});

const customRenderHook = <Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) => {
  return renderHook(renderCallback, {
    wrapper: wrapAllProviders(),
    ...options,
  });
};

export * from '@testing-library/react-native';

export {customRender as render, customRenderHook as renderHook};
