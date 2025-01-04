import {useMutation, useQueryClient} from '@tanstack/react-query';

import {followService} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';

export const useFollowUser = (options?: MutationOptions<void>) => {
  const queryClient = useQueryClient();

  const {mutate, isLoading} = useMutation({
    mutationFn: followService.followUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.MyFollowingList]});
      queryClient.invalidateQueries({queryKey: [QueryKeys.UserGetById]});

      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage ?? 'Erro ao seguir usuário');
      }
    },
  });

  const followUser = (userId: number) => {
    mutate(userId);
  };

  return {
    followUser,
    isLoading,
  };
};
