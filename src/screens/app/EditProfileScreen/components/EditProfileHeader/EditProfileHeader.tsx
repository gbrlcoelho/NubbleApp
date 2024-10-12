import React from 'react';
import {Pressable} from 'react-native';

import {Box, ProfileAvatar, Text} from '@components';

import {EditProfileHeaderProps} from './EditProfileHeaderProps';

export const EditProfileHeader = ({user}: EditProfileHeaderProps) => {
  if (!user) {
    return null;
  }

  const navigateToPhoto = () => {
    // TODO: Implement navigateToPhoto
    console.log('navigateToPhoto');
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <ProfileAvatar imageURL={user.profileUrl} size={64} borderRadius={24} />

      <Pressable hitSlop={10} onPress={navigateToPhoto}>
        <Text preset="paragraphMedium" color="primary" bold ml="s16">
          Alterar foto
        </Text>
      </Pressable>
    </Box>
  );
};
