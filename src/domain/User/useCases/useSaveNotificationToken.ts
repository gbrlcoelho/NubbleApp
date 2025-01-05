import {useEffect} from 'react';

import messaging from '@react-native-firebase/messaging';
import {useMutation} from '@tanstack/react-query';

import {userService} from '@domain';

export const useSaveNotificationToken = () => {
  const mutation = useMutation<string, Error, string>({
    mutationFn: userService.addNotificationToken,
    retry: false,
  });

  const saveNotificationToken = async () => {
    try {
      const token = await messaging().getToken(); // TODO: Move to a service
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
