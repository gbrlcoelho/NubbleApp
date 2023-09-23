import {useCallback, useEffect, useState} from 'react';

import {User, userService} from '@domain';

export const useUserGetById = (id: number) => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const getUserById = useCallback(async () => {
    setLoading(true);
    try {
      const _user = await userService.getById(id);
      setUser(_user);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  return {
    user,
    error,
    loading,
  };
};
