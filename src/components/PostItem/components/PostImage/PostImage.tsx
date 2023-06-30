import React from 'react';
import {Dimensions, Image} from 'react-native';

import {PostImageProps} from './PostImageProps';

export const PostImage = ({imageURL}: PostImageProps) => {
  return (
    <Image
      source={{uri: imageURL}}
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
      resizeMode="cover"
    />
  );
};
