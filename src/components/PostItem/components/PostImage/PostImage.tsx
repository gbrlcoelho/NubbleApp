import React from 'react';
import {Dimensions, Image} from 'react-native';

import {PostImageProps} from './PostImageProps';

const WIDTH = Dimensions.get('screen').width;

export const PostImage = ({imageURL}: PostImageProps) => {
  return (
    <Image
      source={{uri: imageURL}}
      style={{
        width: WIDTH,
        height: WIDTH,
        marginHorizontal: -24,
      }}
      resizeMode="cover"
    />
  );
};
