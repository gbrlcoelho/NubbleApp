import React from 'react';
import {Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

import {ProfileUserProps} from './ProfileUserProps';

export const ProfileUser = ({user}: ProfileUserProps) => {
  const {navigate} = useNavigation();

  const navigateToProfile = () => {
    navigate('ProfileScreen', {userId: user.id});
  };

  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" marginBottom="s16">
        <ProfileAvatar imageURL={user.profileUrl} />
        <Text marginLeft="s12" preset="paragraphMedium" semiBold>
          {user.username}
        </Text>
      </Box>
    </Pressable>
  );
};
