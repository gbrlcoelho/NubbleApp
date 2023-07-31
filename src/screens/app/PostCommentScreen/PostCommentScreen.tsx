import React, {useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Screen} from '@components';
import {PostComment, usePostCommentList} from '@domain';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {PostCommentBottom, PostCommentItem} from './components';

export const PostCommentScreen = ({
  route,
}: AppScreenProps<'PostCommentScreen'>) => {
  const {postId} = route.params;
  const {
    list: postCommentList,
    fetchNextPage,
    hasNextPage,
  } = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  const renderItem: ListRenderItem<PostComment> = useCallback(({item}) => {
    return <PostCommentItem postComment={item} />;
  }, []);

  return (
    <Screen flex={1} title="Comentários" canGoBack>
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
    </Screen>
  );
};
