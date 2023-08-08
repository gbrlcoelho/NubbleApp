import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Box, Screen} from '@components';
import {PostComment, usePostCommentList, useUser} from '@domain';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export const PostCommentScreen = ({
  route,
}: AppScreenProps<'PostCommentScreen'>) => {
  const {postId, postAuthorId} = route.params;
  const {id} = useUser();
  const {
    list: postCommentList,
    fetchNextPage,
    hasNextPage,
    refresh,
  } = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  const renderItem: ListRenderItem<PostComment> = ({item}) => {
    return (
      <PostCommentItem
        postComment={item}
        onRemoveComment={refresh}
        postAuthorId={postAuthorId}
        userId={id}
      />
    );
  };

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
        <PostCommentTextMessage postId={postId} onAddComment={refresh} />
      </Box>
    </Screen>
  );
};
