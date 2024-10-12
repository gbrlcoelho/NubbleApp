import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {InputButtonProps} from './types';

export const InputButton = ({
  label,
  value,
  ...pressableBoxProps
}: InputButtonProps) => {
  return (
    <PressableBox
      borderBottomColor="gray4"
      borderBottomWidth={1}
      paddingBottom="s8"
      {...pressableBoxProps}>
      <Text preset="paragraphMedium" marginBottom="s8">
        {label}
      </Text>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text color="gray2">{value}</Text>
        <Icon name="chevronRight" color="backgroundContrast" />
      </Box>
    </PressableBox>
  );
};
