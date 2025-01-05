import {useEffect} from 'react';

import {useMutation} from '@tanstack/react-query';

import {userService} from '@domain';
import {notificationService} from '@services';

export const useSaveNotificationToken = () => {
  const mutation = useMutation<string, Error, string>({
    mutationFn: userService.addNotificationToken,
    retry: false,
  });

  const saveNotificationToken = async () => {
    try {
      const token = await notificationService.getToken();
      await mutation.mutateAsync(token);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    saveNotificationToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading: mutation.isLoading,
    saveNotificationToken,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
