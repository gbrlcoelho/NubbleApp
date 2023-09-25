import {postService} from '@domain';
import {QueryKeys, usePaginatedList} from '@infra';

export const usePostList = () => {
  return usePaginatedList([QueryKeys.PostList], postService.getList);
};
