import {useInfiniteQuery} from '@tanstack/react-query';

import {QueryKeys} from '@infra';

import {cameraRollService} from './cameraRollService';

export const useCameraRoll = (hasPermission: boolean) => {
  const {data, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: [QueryKeys.CameralRollList],
    queryFn: ({pageParam}) => cameraRollService.getPhotos(pageParam),
    getNextPageParam: ({cursor}) => cursor || undefined,
    enabled: hasPermission,
  });

  const photoList = data?.pages.flatMap(page => page.photoList) || [];

  return {
    photoList,
    hasNextPage,
    fetchNextPage: () => fetchNextPage(),
  };
};
