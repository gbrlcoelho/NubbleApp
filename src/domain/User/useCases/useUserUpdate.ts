import {useMutation, useQueryClient} from '@tanstack/react-query';

import {User, userService} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';
import {useAuthCredentials} from '@services';

import {UpdateUserParams} from '../userTypes';

export const useUserUpdate = (options?: MutationOptions<User>) => {
  const queryClient = useQueryClient();
  const {authCredentials, updateUser: updateAuthUser} = useAuthCredentials();

  const updateUser = async (params: UpdateUserParams): Promise<User> => {
    if (!authCredentials) {
      throw new Error('Current user not found');
    }

    const user = await userService.updateUser(authCredentials.user, params);
    return user;
  };

  const {mutate, isLoading} = useMutation<User, unknown, UpdateUserParams>({
    mutationFn: params => updateUser(params),
    retry: false,
    onError: error => {
      if (options?.onError) {
        // TODO: Handle error
        console.error('Error:', error);
      }
    },
    onSuccess: user => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.UserGetById, user.id],
      });
      updateAuthUser(user);
      if (options?.onSuccess) {
        options.onSuccess(user);
      }
    },
  });

  return {
    updateUser: (params: UpdateUserParams) => {
      mutate(params);
    },
    isLoading,
  };
};
