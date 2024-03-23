import React from 'react';
import {Dimensions, Image} from 'react-native';

import {useAppColor} from '@services';

import {ImageHeaderProps} from './types';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = '100%';

export const ImageHeader = ({image}: ImageHeaderProps) => {
  const appColor = useAppColor();

  const source = appColor === 'light' ? image.light : image.dark;

  return (
    <Image
      source={source}
      style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}
    />
  );
};
