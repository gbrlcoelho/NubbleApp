import {useState} from 'react';

import {useMutation, useQueryClient} from '@tanstack/react-query';

import {followService, useFollowUser} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';

export const useRemoveFollow = (options?: MutationOptions<void>) => {
  const [followUserId, setFollowUserId] = useState<number | null>(null);

  const queryClient = useQueryClient();

  const {followUser} = useFollowUser();

  const {mutate, isLoading} = useMutation({
    mutationFn: followService.removeFollow,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.MyFollowingList]});
      queryClient.invalidateQueries({queryKey: [QueryKeys.UserGetById]});

      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(
          options?.errorMessage ?? 'Erro ao deixar de seguir usuário',
        );
      }
    },
  });

  const removeFollow = ({
    followId,
    userId,
  }: {
    followId: number;
    userId: number;
  }) => {
    setFollowUserId(userId);
    mutate(followId);
  };

  const undoRemoveFollow = () => {
    if (followUserId) {
      followUser(followUserId);
    }
  };

  return {
    removeFollow,
    isLoading,
    undoRemoveFollow,
  };
};
