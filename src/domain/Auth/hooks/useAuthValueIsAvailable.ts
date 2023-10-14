import {useQuery} from '@tanstack/react-query';

import {authService} from '@domain';
import {QueryKeys} from '@infra';

interface Param {
  username: string;
}

export const useAuthUsernameAvailable = ({username}: Param) => {
  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.IsUserNameAvailable, username],
    queryFn: () => authService.isUserNameAvailable(username),
    retry: false,
  });

  return {
    isAvailable: !!data,
    isFetching,
  };
};
