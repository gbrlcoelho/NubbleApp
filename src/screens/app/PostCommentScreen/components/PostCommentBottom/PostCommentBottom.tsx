import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

import {PostCommentBottomProps} from './PostCommentBottomProps';

export const PostCommentBottom = ({
  fetchNextPage,
  hasNextPage,
}: PostCommentBottomProps) => {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text bold color="primary" textAlign="center">
          Ver mais
        </Text>
      </Pressable>
    );
  }

  return null;
};
