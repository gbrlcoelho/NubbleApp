import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {TextMessage} from '@components';
import {usePostCommentCreate} from '@domain';

import {PostCommentTextMessageProps} from './PostCommentTextMessageProps';

export const PostCommentTextMessage = ({
  postId,
  onAddComment,
}: PostCommentTextMessageProps) => {
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
      onAddComment();
    },
  });
  const [message, setMessage] = useState('');

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      value={message}
      onChangeText={setMessage}
      onPressSend={createComment}
    />
  );
};
