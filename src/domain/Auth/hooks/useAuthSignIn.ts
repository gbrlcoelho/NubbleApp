import {useMutation} from '@tanstack/react-query';

import {AuthCredentials, authService} from '@domain';
import {MutationOptions} from '@infra';

interface Variables {
  email: string;
  password: string;
}

export const useAuthSignIn = (options?: MutationOptions<AuthCredentials>) => {
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  return {
    isLoading: mutation.isLoading,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
};
