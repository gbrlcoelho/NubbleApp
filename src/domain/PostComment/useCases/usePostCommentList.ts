import {postCommentService} from '@domain';
import {usePaginatedList} from '@infra';

export const usePostCommentList = (postId: number) => {
  const getList = (page: number) => {
    return postCommentService.getList(postId, page);
  };

  return usePaginatedList(getList);
};
