import {postService, usePaginatedList} from '@domain';

export const usePostList = () => {
  return usePaginatedList(postService.getList);
};
