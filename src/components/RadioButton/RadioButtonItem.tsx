import React from 'react';

import {Box, RadioButton, Text} from '@components';

import {RadioButtonItemProps} from './types';

const TEXT_WIDTH = '80%';

export const RadioButtonItem = ({
  label,
  description,
  ...radioButtonProps
}: RadioButtonItemProps) => {
  return (
    <Box paddingVertical="s16">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text semiBold>{label}</Text>
        <RadioButton {...radioButtonProps} />
      </Box>
      {description && (
        <Text style={{width: TEXT_WIDTH}} color="paragraphSecondary">
          {description}
        </Text>
      )}
    </Box>
  );
};
