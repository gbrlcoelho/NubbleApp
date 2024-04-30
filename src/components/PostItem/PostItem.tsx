import React from 'react';

import {Box, ProfileUser} from '@components';

import {PostActions} from './components/PostActions/PostActions';
import {PostBottom} from './components/PostBottom/PostBottom';
import {PostImage} from './components/PostImage/PostImage';
import {PostItemProps} from './PostItemProps';

export const PostItem = ({post, hideCommentAction}: PostItemProps) => {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <ProfileUser user={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions post={post} hideCommentAction={hideCommentAction} />
      <PostBottom
        hideCommentAction={hideCommentAction}
        id={post.id}
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
      />
    </Box>
  );
};
