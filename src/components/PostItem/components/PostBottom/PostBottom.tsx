import React from 'react';

import {Box, Text} from '@components';

import {PostBottomProps} from './PostBottomProps';

export const PostBottom = ({author, text, commentCount}: PostBottomProps) => {
  const commentText = getCommentText(commentCount);

  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text preset="paragraphSmall" bold color="primary" marginTop="s8">
          {commentText}
        </Text>
      )}
    </Box>
  );
};

const getCommentText = (commentCount: number) => {
  if (commentCount === 0) {
    return '';
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
};
