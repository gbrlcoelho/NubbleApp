import {useAppTheme} from '@hooks';
import React from 'react';
import {IconProps, iconRegistry} from './IconProps';

export const Icon = ({name, color = 'backgroundContrast', size}: IconProps) => {
  const {colors} = useAppTheme();

  const SVGIcon = iconRegistry[name];

  return <SVGIcon size={size} color={colors[color]} />;
};
