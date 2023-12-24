import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 5;
const getList = async (
  postId: number,
  page: number,
): Promise<Page<PostComment>> => {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return apiAdapter.toPageModel(
    postCommentPageAPI,
    postCommentAdapter.toPostComment,
  );
};

const create = async (
  postId: number,
  message: string,
): Promise<PostComment> => {
  const postCommentAPI = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
};

const remove = async (postCommentId: number): Promise<string> => {
  const {message} = await postCommentApi.remove(postCommentId);
  return message;
};

/**
 * @description Check if the user is the post author or the comment author
 * @param postComment comment to be deleted
 * @param userId The current logged in user id
 * @param postAuthorId The post author id
 * @returns boolean
 */
const isAllowedToDelete = (
  postComment: PostComment,
  userId: number | null,
  postAuthorId: number,
): boolean => {
  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthorId === userId) {
    return true;
  }

  return false;
};

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowedToDelete,
};
