import {useQuery} from '@tanstack/react-query';

import {authService} from '@domain';
import {useDebounce} from '@hooks';
import {QueryKeys} from '@infra';

interface Param {
  username: string;
}

export const useAuthUsernameAvailable = ({username}: Param) => {
  const debouncedUsername = useDebounce(username, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.IsUserNameAvailable, debouncedUsername],
    queryFn: () => authService.isUserNameAvailable(debouncedUsername),
    retry: false,
    staleTime: 20000,
  });

  return {
    isAvailable: !!data,
    isFetching,
  };
};
