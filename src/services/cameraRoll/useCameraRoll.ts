import {useRef} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';

import {QueryKeys} from '@infra';

import {cameraRollService} from './cameraRollService';

export const useCameraRoll = (
  hasPermission: boolean,
  onInitialLoading?: (imageUri: string) => void,
) => {
  const initialLoadingCalled = useRef(false);

  const {data, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: [QueryKeys.CameralRollList],
    queryFn: ({pageParam}) => cameraRollService.getPhotos(pageParam),
    getNextPageParam: ({cursor}) => cursor || undefined,
    enabled: hasPermission,
    onSuccess: pageData => {
      if (
        !initialLoadingCalled.current &&
        onInitialLoading &&
        pageData.pages[0]?.photoList[0]
      ) {
        onInitialLoading(pageData.pages[0].photoList[0]);
        initialLoadingCalled.current = true;
      }
    },
  });

  const photoList = data?.pages.flatMap(page => page.photoList) || [];

  return {
    photoList,
    hasNextPage,
    fetchNextPage: () => fetchNextPage(),
  };
};
