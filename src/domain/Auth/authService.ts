import {api} from '@api';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, EditPasswordParams, SignUpData} from './authTypes';

const signIn = async (
  email: string,
  password: string,
): Promise<AuthCredentials> => {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('email ou senha inválidos');
  }
};

const signOut = async (): Promise<string> => {
  const message = await authApi.signOut();
  return message;
};

const signUp = async (signUpData: SignUpData): Promise<void> => {
  await authApi.signUp(signUpData);
};

const isUserNameAvailable = async (username: string): Promise<boolean> => {
  const {isAvailable} = await authApi.isUserNameAvailable({username});
  return isAvailable;
};
const isEmailAvailable = async (email: string): Promise<boolean> => {
  const {isAvailable} = await authApi.isEmailAvailable({email});
  return isAvailable;
};

const updateToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  api.defaults.headers.common.Authorization = null;
};

const requestNewPassword = async (email: string): Promise<string> => {
  const {message} = await authApi.forgotPassword({email});
  return message;
};

const updatePassword = async (params: EditPasswordParams): Promise<string> => {
  const {message} = await authApi.editPassword(params);
  return message;
};

const authenticateByRefreshToken = async (
  refreshToken: string,
): Promise<AuthCredentials> => {
  const authCredentialsAPI = await authApi.refreshToken(refreshToken);
  return authAdapter.toAuthCredentials(authCredentialsAPI);
};

export const authService = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  updateToken,
  removeToken,
  requestNewPassword,
  updatePassword,
  authenticateByRefreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
};
