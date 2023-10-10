import {useInfiniteQuery} from '@tanstack/react-query';

import {Page} from '@types';

export interface UsePaginatedListResult<T> {
  list: T[];
  isError: boolean;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export const usePaginatedList = <T>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<T>>,
): UsePaginatedListResult<T> => {
  const {data, isError, isLoading, hasNextPage, fetchNextPage, refetch} =
    useInfiniteQuery({
      queryKey,
      queryFn: ({pageParam = 1}) => getList(pageParam),
      getNextPageParam: ({meta}) =>
        meta.hasNextPage ? meta.currentPage + 1 : undefined,
    });

  const list = data?.pages.flatMap(page => page.data) || [];

  return {
    list,
    isError,
    isLoading,
    refresh: refetch,
    fetchNextPage,
    hasNextPage: !!hasNextPage,
  };
};
