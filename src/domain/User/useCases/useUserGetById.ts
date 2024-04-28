import {useQuery} from '@tanstack/react-query';

import {userService} from '@domain';
import {QueryKeys} from '@infra';

export const useUserGetById = (id: number) => {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30,
  });

  return {
    user: data,
    isLoading,
    isFetching,
    isError,
    refetch,
  };
};
