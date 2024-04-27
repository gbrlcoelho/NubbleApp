import {userAdapter} from '@domain';

import {
  PostReaction,
  PostReactionAPI,
  PostReactionBase,
  PostReactionBaseAPI,
} from './postReactionTypes';

const toPostReactionBase = (
  postReactionBaseAPI: PostReactionBaseAPI,
): PostReactionBase => {
  return {
    id: postReactionBaseAPI.id,
    postId: postReactionBaseAPI.post_id,
    userId: postReactionBaseAPI.user_id,
    emojiType: postReactionBaseAPI.emoji_type,
    isChecked: postReactionBaseAPI.is_checked,
    createdAt: postReactionBaseAPI.created_at,
    updatedAt: postReactionBaseAPI.updated_at,
  };
};

const toPostReaction = (postReactionAPI: PostReactionAPI): PostReaction => {
  return {
    ...toPostReactionBase(postReactionAPI),
    author: userAdapter.toUser(postReactionAPI.user),
    post: {
      id: postReactionAPI.post.id,
      text: postReactionAPI.post.text,
      imageURL: postReactionAPI.post.image_url,
    },
  };
};

export const postReactionAdapter = {toPostReactionBase, toPostReaction};
