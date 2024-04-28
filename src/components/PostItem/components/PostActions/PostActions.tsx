import React from 'react';

import {Box} from '@components';

import {Item} from './components/Item';
import {PostActionsProps} from './PostActionsProps';

export const PostActions = ({
  commentCount,
  reactionCount,
  favoriteCount,
  hideCommentAction,
}: PostActionsProps) => {
  const likePost = () => {
    // TODO: Implement likePost
  };

  const navigateToComments = () => {
    // TODO: Implement navigate to comments
  };

  const favoritePost = () => {
    // TODO: Implement favorite post
  };

  return (
    <Box flexDirection="row" marginTop="s16">
      <Item
        marked
        onPress={likePost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={reactionCount}
      />
      <Item
        disabled={hideCommentAction}
        marked={false}
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={commentCount}
      />
      <Item
        marked={false}
        onPress={favoritePost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={favoriteCount}
      />
    </Box>
  );
};
