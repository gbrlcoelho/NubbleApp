import {useMutation} from '@tanstack/react-query';

import {SignUpData, authService} from '@domain';
import {MutationOptions} from '@infra';

export const useAuthSignUp = (options?: MutationOptions<void>) => {
  const mutation = useMutation<void, Error, SignUpData>({
    mutationFn: signUpData => authService.signUp(signUpData),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  return {
    isLoading: mutation.isLoading,
    signUp: (signUpData: SignUpData) => mutation.mutate(signUpData),
  };
};
