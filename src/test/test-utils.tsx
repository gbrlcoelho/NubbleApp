import React, {FC, ReactElement, ReactNode} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {RenderOptions, render} from '@testing-library/react-native';

import {theme} from '@theme';

const AllTheProviders: FC<{children: ReactNode}> = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';

export {customRender as render};
