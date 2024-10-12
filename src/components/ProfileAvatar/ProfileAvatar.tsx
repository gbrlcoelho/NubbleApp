import React from 'react';
import {Image, Pressable} from 'react-native';

import {useAppNavigation} from '@hooks';

import {ProfileAvatarProps} from './ProfileAvatarProps';

export const ProfileAvatar = ({
  imageURL,
  size = 32,
  borderRadius = 14,
  authorId,
}: ProfileAvatarProps) => {
  const {navigate} = useAppNavigation();

  const handleOnPress = () => {
    if (authorId) {
      navigate.toProfile(authorId);
    }
  };

  return (
    <Pressable onPress={handleOnPress} disabled={!authorId}>
      <Image
        source={{uri: imageURL}}
        style={{width: size, height: size, borderRadius: borderRadius}}
      />
    </Pressable>
  );
};
