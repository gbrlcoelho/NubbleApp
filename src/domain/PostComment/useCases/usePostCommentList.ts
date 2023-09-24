import {postCommentService} from '@domain';
import {QueryKeys, usePaginatedList} from '@infra';

export const usePostCommentList = (postId: number) => {
  const getList = (page: number) => {
    return postCommentService.getList(postId, page);
  };

  return usePaginatedList([QueryKeys.PostCommentList], getList);
};
