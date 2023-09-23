import React from 'react';
import {Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

import {PostHeaderProps} from './PostHeaderProps';

export const PostHeader = ({author}: PostHeaderProps) => {
  const {navigate} = useNavigation();

  const navigateToProfile = () => {
    navigate('ProfileScreen', {userId: author.id});
  };

  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" marginBottom="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text marginLeft="s12" preset="paragraphMedium" semiBold>
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
};
