import React from 'react';

import {Box, ProfileAvatar, Text} from '@components';

import {PostHeaderProps} from './PostHeaderProps';

export const PostHeader = ({author}: PostHeaderProps) => {
  return (
    <Box flexDirection="row" alignItems="center" marginBottom="s16">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text marginLeft="s12" preset="paragraphMedium" semiBold>
        {author.userName}
      </Text>
    </Box>
  );
};
