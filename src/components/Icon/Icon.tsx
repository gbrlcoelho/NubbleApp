import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';

import {IconProps, iconRegistry} from './IconProps';

export const Icon = ({
  name,
  color = 'backgroundContrast',
  fillColor = 'backgroundContrast',
  size,
  onPress,
}: IconProps) => {
  const {colors} = useAppTheme();

  const SVGIcon = iconRegistry[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
    fillColor,
  };

  if (onPress) {
    return (
      <Pressable testID={name} onPress={onPress} hitSlop={10}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }

  return <SVGIcon {...iconProps} />;
};
