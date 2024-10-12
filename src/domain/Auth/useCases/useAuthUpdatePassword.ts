import {useMutation} from '@tanstack/react-query';

import {authService} from '@domain';
import {MutationOptions} from '@infra';
import {errorUtils} from '@utils';

import {EditPasswordParams} from '../authTypes';

export const useAuthUpdatePassword = (options?: MutationOptions<string>) => {
  const {mutate, isLoading} = useMutation<string, unknown, EditPasswordParams>({
    mutationFn: params => authService.updatePassword(params),
    retry: false,
    onError: message => {
      if (options?.onError) {
        options.onError(errorUtils.getErrorMessage(message));
      }
    },
    onSuccess: message => {
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
  });

  return {
    updatePassword: (params: EditPasswordParams) => mutate(params),
    isLoading,
  };
};
