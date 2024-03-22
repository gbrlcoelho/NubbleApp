import React from 'react';

import {Icon, PressableBox, Text} from '@components';

import {MenuItemProps} from './types';

export const MenuItem = ({label, onPress}: MenuItemProps) => {
  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingVertical="s16"
      onPress={onPress}>
      <Text>{label}</Text>
      <Icon name="chevronRight" size={24} color="iconColor" />
    </PressableBox>
  );
};
