import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box} from '@components';
import {useReactToPost} from '@domain';
import {QueryKeys} from '@infra';

import {Item} from './components/Item';
import {PostActionsProps} from './PostActionsProps';

export const PostActions = ({hideCommentAction, post}: PostActionsProps) => {
  const {navigate} = useNavigation();
  const likeReaction = useReactToPost({post, postReactionType: 'like'});
  const favoriteReaction = useReactToPost({
    post,
    postReactionType: 'favorite',
    queryKeys: [QueryKeys.FavoriteList],
  });

  const navigateToComments = () => {
    navigate('PostCommentScreen', {
      postId: post.id,
      postAuthorId: post.author.id,
    });
  };

  return (
    <Box flexDirection="row" marginTop="s16">
      <Item
        marked={likeReaction.hasReacted}
        onPress={likeReaction.reactToPost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={likeReaction.reactionCount}
      />
      <Item
        disabled={hideCommentAction}
        marked={false}
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={post.commentCount}
      />
      <Item
        marked={favoriteReaction.hasReacted}
        onPress={favoriteReaction.reactToPost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={favoriteReaction.reactionCount}
      />
    </Box>
  );
};
