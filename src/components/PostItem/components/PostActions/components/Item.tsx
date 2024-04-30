import React from 'react';

import {Icon, IconProps, Text, TouchableOpacityBox} from '@components';

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  disabled?: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

export const Item = ({onPress, icon, marked, text, disabled}: ItemProps) => {
  return (
    <TouchableOpacityBox
      disabled={disabled}
      flexDirection="row"
      alignItems="center"
      marginRight="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 ? (
        <Text preset="paragraphSmall" bold marginLeft="s4">
          {text}
        </Text>
      ) : null}
    </TouchableOpacityBox>
  );
};
