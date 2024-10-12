import {api, AxiosRequestConfig} from '@api';
import {UserAPI} from '@domain';

import {
  AuthCredentialsAPI,
  EditPasswordParams,
  FieldIsAvailableAPI,
  ForgotPasswordParam,
  SignUpDataAPI,
} from './authTypes';

const REFRESH_TOKEN_URL = 'auth/refresh-token';

const signIn = async (
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> => {
  const response = await api.post<AuthCredentialsAPI>('auth/login', {
    email,
    password,
  });
  return response.data;
};

const signOut = async (): Promise<string> => {
  const response = await api.get('auth/profile/logout');
  return response.data;
};

const signUp = async (data: SignUpDataAPI): Promise<UserAPI> => {
  const response = await api.post<UserAPI>('auth/register', data);
  return response.data;
};

const isUserNameAvailable = async (params: {
  username: string;
}): Promise<FieldIsAvailableAPI> => {
  const response = await api.get<FieldIsAvailableAPI>(
    'auth/validate-username',
    {
      params,
    },
  );

  return response.data;
};

const isEmailAvailable = async (params: {
  email: string;
}): Promise<FieldIsAvailableAPI> => {
  const response = await api.get<FieldIsAvailableAPI>('auth/validate-email', {
    params,
  });

  return response.data;
};

const forgotPassword = async (
  params: ForgotPasswordParam,
): Promise<{message: string}> => {
  const response = await api.post<{message: string}>(
    'auth/forgot-password',
    params,
  );

  return response.data;
};

const editPassword = async (
  params: EditPasswordParams,
): Promise<{message: string}> => {
  const response = await api.post<{message: string}>(
    'auth/profile/edit-password',
    params,
  );
  return response.data;
};

const refreshToken = async (token: string): Promise<AuthCredentialsAPI> => {
  const response = await api.post<AuthCredentialsAPI>(REFRESH_TOKEN_URL, {
    refreshToken: token,
  });

  return response.data;
};

const isRefreshTokenRequest = (request: AxiosRequestConfig): boolean => {
  const url = request.url;

  return url === REFRESH_TOKEN_URL;
};

export const authApi = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  forgotPassword,
  editPassword,
  refreshToken,
  isRefreshTokenRequest,
};
