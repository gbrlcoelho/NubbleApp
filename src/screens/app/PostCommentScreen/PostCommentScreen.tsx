import React, {useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Box, PostItem, Screen} from '@components';
import {PostComment, usePostCommentList, usePostGetById} from '@domain';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';
import {useAuthCredentials} from '@services';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export const PostCommentScreen = ({
  route,
}: AppScreenProps<'PostCommentScreen'>) => {
  const {postId, postAuthorId, showPost = false} = route.params;
  const {userId} = useAuthCredentials();
  const {
    list: postCommentList,
    fetchNextPage,
    hasNextPage,
  } = usePostCommentList(postId);

  const {post} = usePostGetById(postId, showPost);

  const {bottom} = useAppSafeArea();

  const renderItem: ListRenderItem<PostComment> = useCallback(
    ({item}) => {
      return (
        <PostCommentItem
          postId={postId}
          postComment={item}
          postAuthorId={postAuthorId}
          userId={userId}
        />
      );
    },
    [postAuthorId, postId, userId],
  );

  return (
    <Screen
      noPaddingHorizontal
      flex={1}
      title={showPost ? 'Post' : 'Comentários'}
      canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={postCommentList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom: bottom}}
          ListHeaderComponent={
            post && showPost ? (
              <PostItem post={post} hideCommentAction={showPost} />
            ) : null
          }
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
};
