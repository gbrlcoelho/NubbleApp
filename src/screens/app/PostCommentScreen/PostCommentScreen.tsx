import React, {useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Box, Screen} from '@components';
import {PostComment, usePostCommentList} from '@domain';
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
  const {postId, postAuthorId} = route.params;
  const {userId} = useAuthCredentials();
  const {
    list: postCommentList,
    fetchNextPage,
    hasNextPage,
  } = usePostCommentList(postId);

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
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={postCommentList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom: bottom}}
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
