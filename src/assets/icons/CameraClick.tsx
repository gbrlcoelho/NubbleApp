import React from 'react';

import {Circle, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const CameraClick = ({size = 80, color = 'white'}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="34" fill={color} />
      <Circle cx="40" cy="40" r="39" stroke={color} stroke-width="2" />
    </Svg>
  );
};
