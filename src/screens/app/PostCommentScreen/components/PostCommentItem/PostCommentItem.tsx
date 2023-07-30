import React from 'react';

import {Box, ProfileAvatar, Text} from '@components';

import {PostCommentItemProps} from './PostCommentItemProps';

export const PostCommentItem = ({postComment}: PostCommentItemProps) => {
  return (
    <Box flexDirection="row" alignItems="center" marginBottom="s16">
      <ProfileAvatar imageURL={postComment.author.profileURL} />
      <Box marginLeft="s12" flex={1}>
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message}
        </Text>
      </Box>
    </Box>
  );
};
