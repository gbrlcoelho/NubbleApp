import {api} from '@api';
import {UserAPI} from '@domain';

import {
  AuthCredentialsAPI,
  FieldIsAvailableAPI,
  ForgotPasswordParam,
  SignUpDataAPI,
} from './authTypes';

const signIn = async (
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> => {
  const response = await api.post<AuthCredentialsAPI>('login', {
    email,
    password,
  });
  return response.data;
};

const signOut = async (): Promise<string> => {
  const response = await api.get('profile/logout');
  return response.data;
};

const signUp = async (data: SignUpDataAPI): Promise<UserAPI> => {
  const response = await api.post<UserAPI>('register', data);
  return response.data;
};

const isUserNameAvailable = async (params: {
  username: string;
}): Promise<FieldIsAvailableAPI> => {
  const response = await api.get<FieldIsAvailableAPI>('validate-username', {
    params,
  });

  return response.data;
};

const isEmailAvailable = async (params: {
  email: string;
}): Promise<FieldIsAvailableAPI> => {
  const response = await api.get<FieldIsAvailableAPI>('validate-email', {
    params,
  });

  return response.data;
};

const forgotPassword = async (
  params: ForgotPasswordParam,
): Promise<{message: string}> => {
  const response = await api.post<{message: string}>('forgot-password', {
    params,
  });

  return response.data;
};

export const authApi = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  forgotPassword,
};
