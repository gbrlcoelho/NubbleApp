import {useMemo} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';

import {QueryKeys} from '@infra';

import {multimediaService} from './multimediaService';

export const useMultimediaGetPhotos = (
  hasPermission: boolean,
  onInitialLoading?: (imageUri: string) => void,
) => {
  const {
    data,
    fetchNextPage: queryFetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [QueryKeys.CameralRollList],
    queryFn: ({pageParam}) => multimediaService.getPhotos(pageParam),
    getNextPageParam: ({cursor}) => cursor,
    enabled: hasPermission,
    onSuccess: pageData => {
      if (onInitialLoading && pageData.pages.length === 1) {
        onInitialLoading(pageData.pages[0].photoList[0]);
      }
    },
  });

  const photoList = useMemo(
    () => data?.pages.flatMap(page => page.photoList) || [],
    [data],
  );

  const fetchNextPage = () => {
    if (hasPermission) {
      queryFetchNextPage();
    }
  };

  return {
    photoList,
    hasNextPage,
    fetchNextPage,
  };
};
