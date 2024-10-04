import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ProfileAvatar, Text} from '@components';

import {ProfileMetadata} from '../ProfileMetadata/ProfileMetadata';

import {ProfileHeaderProps} from './ProfileHeaderProps';

export const ProfileHeader = ({
  user,
  isMyProfile,
  publicationsCount,
}: ProfileHeaderProps) => {
  const {navigate} = useNavigation();

  return (
    <Box alignItems="center">
      <ProfileAvatar imageURL={user?.profileUrl} size={100} borderRadius={40} />
      <Text preset="headingMedium" marginTop="s16">
        {user.fullName}
      </Text>
      <Text preset="paragraphLarge" mt="s4" color="gray1">
        @{user.username}
      </Text>
      <ProfileMetadata
        followersCount={user.meta.followersCount}
        followingCount={user.meta.followingCount}
        publicationsCount={publicationsCount}
      />
      {isMyProfile && (
        <Box position="absolute" alignSelf="flex-end">
          <Icon name="settings" onPress={() => navigate('SettingsScreen')} />
        </Box>
      )}
    </Box>
  );
};
