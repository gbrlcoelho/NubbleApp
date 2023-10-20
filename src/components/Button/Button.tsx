import React from 'react';

import {ActivityIndicator, Text, TouchableOpacityBox} from '@components';

import {buttonPresets} from './ButtonPresets';
import {ButtonProps} from './ButtonProps';

export const Button = ({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) => {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator
          testID="activity-indicator"
          color={buttonPreset.content}
        />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};
