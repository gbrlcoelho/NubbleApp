import React from 'react';

import {BackButton, Box, Text} from '@components';

import {ScreenHeaderProps} from './ScreenHeaderProps';

const ICON_SIZE = 20;
export const ScreenHeader = ({
  canGoBack,
  title,
  HeaderComponent,
  ...boxProps
}: ScreenHeaderProps) => {
  const showBackLabel = Boolean(!title) && Boolean(!HeaderComponent);

  if (!canGoBack && !title && !HeaderComponent) {
    return null;
  }

  return (
    <Box
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      marginBottom="s24"
      {...boxProps}>
      {canGoBack && <BackButton showBackLabel={showBackLabel} />}
      {HeaderComponent}
      {Boolean(title) && <Text preset="headingSmall">{title}</Text>}
      {Boolean(title) && <Box width={ICON_SIZE} />}
    </Box>
  );
};
