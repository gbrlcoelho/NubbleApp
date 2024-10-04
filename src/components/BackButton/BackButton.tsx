import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Icon, Text, TouchableOpacityBox} from '@components';

import {BackButtonProps} from './BackButtonProps';

const ICON_SIZE = 20;

export const BackButton = ({showBackLabel}: BackButtonProps) => {
  const {goBack} = useNavigation();

  return (
    <TouchableOpacityBox
      testID="screen-back-button"
      flexDirection="row"
      alignItems="center"
      onPress={goBack}
      marginRight={showBackLabel ? 's10' : undefined}>
      <Icon name="arrowLeft" color="primary" size={ICON_SIZE} />
      {showBackLabel && (
        <Text preset="paragraphMedium" semiBold marginLeft="s8">
          Voltar
        </Text>
      )}
    </TouchableOpacityBox>
  );
};
