import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenHeaderProps} from './ScreenHeaderProps';

const ICON_SIZE = 20;
export const ScreenHeader = ({
  canGoBack,
  title,
  HeaderComponent,
  ...boxProps
}: ScreenHeaderProps) => {
  const {goBack} = useNavigation();

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
      {canGoBack && (
        <TouchableOpacityBox
          testID="screen-back-button"
          flexDirection="row"
          alignItems="center"
          onPress={goBack}
          marginRight="s10">
          <Icon name="arrowLeft" color="primary" size={ICON_SIZE} />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold marginLeft="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {Boolean(title) && <Text preset="headingSmall">{title}</Text>}
      {Boolean(title) && <Box width={ICON_SIZE} />}
    </Box>
  );
};
