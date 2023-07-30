import {postCommentService, usePaginatedList} from '@domain';

export const usePostCommentList = (postId: number) => {
  const getList = (page: number) => {
    return postCommentService.getList(postId, page);
  };

  return usePaginatedList(getList);
};
