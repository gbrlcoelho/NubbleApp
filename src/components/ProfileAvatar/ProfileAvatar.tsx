import React from 'react';
import {Image} from 'react-native';

import {ProfileAvatarProps} from './ProfileAvatarProps';

export const ProfileAvatar = ({
  imageURL,
  size = 32,
  borderRadius = 14,
}: ProfileAvatarProps) => {
  return (
    <Image
      source={{uri: imageURL}}
      style={{width: size, height: size, borderRadius: borderRadius}}
    />
  );
};
