import {api} from '@api';

import {AuthCredentialsAPI} from './authTypes';

const signIn = async (
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> => {
  const response = await api.post<any>('login', {email, password});
  return response.data;
};

const signOut = async (): Promise<string> => {
  const response = await api.get('profile/logout');
  return response.data;
};

export const authApi = {
  signIn,
  signOut,
};
