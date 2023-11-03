import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';
import {QueryKeys} from '@infra';

import {authService} from '../authService';

interface Param<T extends {length: number}> {
  value: T;
  enabled: boolean;
  queryKey: QueryKeys;
  isAvailableFn: (value: T) => Promise<boolean>;
}

const useAuthValueIsAvailable = <T extends {length: number}>({
  value,
  enabled,
  queryKey,
  isAvailableFn,
}: Param<T>) => {
  const debouncedValue = useDebounce(value, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => isAvailableFn(debouncedValue),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedValue.length > 0,
  });

  const isDebouncing = debouncedValue !== value;

  return {
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing,
  };
};

export const useAuthUsernameAvailable = ({
  username,
  enabled,
}: {
  username: string;
  enabled: boolean;
}) => {
  return useAuthValueIsAvailable({
    value: username,
    enabled,
    queryKey: QueryKeys.IsUsernameAvailable,
    isAvailableFn: authService.isUserNameAvailable,
  });
};

export const useAuthEmailAvailable = ({
  email,
  enabled,
}: {
  email: string;
  enabled: boolean;
}) => {
  return useAuthValueIsAvailable({
    value: email,
    enabled,
    queryKey: QueryKeys.IsEmailAvailable,
    isAvailableFn: authService.isEmailAvailable,
  });
};
