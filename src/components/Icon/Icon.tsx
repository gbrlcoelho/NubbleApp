import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';

import {IconProps, iconRegistry} from './IconProps';

export const Icon = ({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) => {
  const {colors} = useAppTheme();

  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
        <SVGIcon size={size} color={colors[color]} />
      </Pressable>
    );
  }

  return <SVGIcon size={size} color={colors[color]} />;
};
