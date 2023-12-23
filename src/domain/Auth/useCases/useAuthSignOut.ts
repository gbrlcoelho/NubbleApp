import {useMutation} from '@tanstack/react-query';

import {authService} from '@domain';
import {useAuthCredentials, useSearchHistoryService} from '@services';

export const useAuthSignOut = () => {
  const {removeCredentials} = useAuthCredentials();
  const {clearUserList} = useSearchHistoryService();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSettled: () => {
      removeCredentials();
      clearUserList();
    },
  });

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  };
};
