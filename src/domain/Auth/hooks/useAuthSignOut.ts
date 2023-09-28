import {useMutation} from '@tanstack/react-query';

import {authService} from '@domain';
import {useAuthCredentials} from '@services';

export const useAuthSignOut = () => {
  const {removeCredentials} = useAuthCredentials();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess: () => {
      authService.removeToken();
      removeCredentials();
    },
  });

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  };
};
