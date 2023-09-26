import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials} from './authTypes';

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

export const authService = {
  signIn,
  signOut,
};
