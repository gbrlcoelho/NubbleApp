import {postService} from '@domain';
import {usePaginatedList} from '@infra';

export const usePostList = () => {
  return usePaginatedList(postService.getList);
};
