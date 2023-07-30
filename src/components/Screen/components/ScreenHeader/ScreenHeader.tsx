import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenHeaderProps} from './ScreenHeaderProps';

const ICON_SIZE = 20;
export const ScreenHeader = ({canGoBack, title}: ScreenHeaderProps) => {
  const {goBack} = useNavigation();

  return (
    <Box
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      marginBottom="s24">
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          onPress={goBack}>
          <Icon name="arrowLeft" color="primary" size={ICON_SIZE} />
          {!title && (
            <Text preset="paragraphMedium" semiBold marginLeft="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {Boolean(title) && <Text preset="headingSmall">{title}</Text>}
      {Boolean(title) && <Box width={ICON_SIZE} />}
    </Box>
  );
};
