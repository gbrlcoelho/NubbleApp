import {dateUtils} from '@utils';

import {PostComment, PostCommentAPI} from './postCommentTypes';

/**
 * @description Adapter PostCommentAPI to PostComment
 */
const toPostComment = (postCommentAPI: PostCommentAPI): PostComment => {
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.message,
    createdAt: postCommentAPI.created_at,
    createdAtRelative: dateUtils.formatRelative(postCommentAPI.created_at),
    author: {
      id: postCommentAPI.user.id,
      name: postCommentAPI.user.full_name,
      profileUrl: postCommentAPI.user.profile_url,
      username: postCommentAPI.user.username,
    },
  };
};

export const postCommentAdapter = {
  toPostComment,
};
