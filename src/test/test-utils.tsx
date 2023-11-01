import React, {FC, ReactElement, ReactNode} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {RenderOptions, render} from '@testing-library/react-native';

import {theme} from '@theme';

export const AllTheProviders: FC<{children: ReactNode}> = ({children}) => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>{children}</NavigationContainer>
  </ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';

export {customRender as render};
