import React from 'react';
import {Alert, Pressable} from 'react-native';

import {Box, ProfileAvatar, Text} from '@components';
import {postCommentService, usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

import {PostCommentItemProps} from './PostCommentItemProps';

export const PostCommentItem = ({
  postId,
  postComment,
  userId,
  postAuthorId,
}: PostCommentItemProps) => {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove(postId, {
    onSuccess: () => {
      showToast({message: 'Comentário deletado'});
    },
  });

  const isAllowedToDelete = postCommentService.isAllowedToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  const confirmRemove = () => {
    Alert.alert('Deseja excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        onPress: () => {
          mutate({postCommentId: postComment.id});
        },
      },
    ]);
  };

  return (
    <Pressable
      testID="post-comment-id"
      disabled={!isAllowedToDelete}
      onLongPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center" marginBottom="s16">
        <ProfileAvatar imageURL={postComment.author.profileUrl} />
        <Box marginLeft="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.username}
          </Text>
          <Text preset="paragraphSmall" color="paragraph">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};
