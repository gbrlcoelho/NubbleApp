import {useMemo} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';

import {QueryKeys} from '@infra';

import {cameraRollService} from './cameraRollService';

export const useCameraRoll = (
  hasPermission: boolean,
  onInitialLoading?: (imageUri: string) => void,
) => {
  const {data, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: [QueryKeys.CameralRollList],
    queryFn: ({pageParam}) => cameraRollService.getPhotos(pageParam),
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

  return {
    photoList,
    hasNextPage,
    fetchNextPage: () => fetchNextPage(),
  };
};
