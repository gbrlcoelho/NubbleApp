import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {BackButton, Box, Icon, ProfileAvatar, Text} from '@components';

import {ProfileButton} from '../ProfileButton/ProfileButton';
import {ProfileMetadata} from '../ProfileMetadata/ProfileMetadata';

import {ProfileHeaderProps} from './ProfileHeaderProps';

export const ProfileHeader = ({
  userDetails,
  isMyProfile,
  publicationsCount,
}: ProfileHeaderProps) => {
  const {navigate} = useNavigation();

  return (
    <Box paddingHorizontal="s24">
      <Box alignItems="center">
        <ProfileAvatar
          imageURL={userDetails?.profileUrl}
          size={100}
          borderRadius={40}
        />
        <Text preset="headingMedium" marginTop="s16">
          {userDetails.fullName}
        </Text>
        <Text preset="paragraphLarge" mt="s4" color="gray1">
          @{userDetails.username}
        </Text>
        <ProfileMetadata
          followersCount={userDetails.meta.followersCount}
          followingCount={userDetails.meta.followingCount}
          publicationsCount={publicationsCount}
        />
        {isMyProfile ? (
          <Box position="absolute" alignSelf="flex-end">
            <Icon
              size={30}
              name="settings"
              onPress={() => navigate('SettingsScreen')}
            />
          </Box>
        ) : (
          <Box position="absolute" alignSelf="flex-start">
            <BackButton />
          </Box>
        )}
      </Box>

      <ProfileButton
        userId={userDetails.id}
        isMyProfile={isMyProfile}
        isFollowing={userDetails.isFollowing}
      />
    </Box>
  );
};
