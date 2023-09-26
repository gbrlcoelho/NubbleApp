import {useMutation} from '@tanstack/react-query';

import {authService} from '@domain';

export const useAuthSignOut = () => {
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
  });

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  };
};
