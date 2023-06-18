import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const ChevronRightIcon = ({size = 20, color = 'black'}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7 4L14 10L7 16"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
