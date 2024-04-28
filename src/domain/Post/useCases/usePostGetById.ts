import {useQuery} from '@tanstack/react-query';

import {postService} from '@domain';
import {QueryKeys} from '@infra';

export const usePostGetById = (id: number, enabled: boolean) => {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.PostGetByID, id],
    queryFn: () => postService.getById(id),
    staleTime: 1000 * 30,
    enabled,
  });

  return {
    post: data,
    isLoading,
    isFetching,
    isError,
    refetch,
  };
};
