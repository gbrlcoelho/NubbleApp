import React from 'react';

import {Box} from '@components';

import {PostActions} from './components/PostActions/PostActions';
import {PostBottom} from './components/PostBottom/PostBottom';
import {PostHeader} from './components/PostHeader/PostHeader';
import {PostImage} from './components/PostImage/PostImage';
import {PostItemProps} from './PostItemProps';

export const PostItem = ({post}: PostItemProps) => {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={post.reactionCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
      <PostBottom
        id={post.id}
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
      />
    </Box>
  );
};
