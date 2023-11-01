import {useMutation} from '@tanstack/react-query';

import {AuthCredentials, authService} from '@domain';
import {MutationOptions} from '@infra';
import {useAuthCredentials} from '@services';

interface Variables {
  email: string;
  password: string;
}

export const useAuthSignIn = (options?: MutationOptions<AuthCredentials>) => {
  const {saveCredentials} = useAuthCredentials();

  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: authCredentials => {
      saveCredentials(authCredentials);
    },
  });

  return {
    isLoading: mutation.isLoading,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
};
