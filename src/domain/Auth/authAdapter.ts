import {userAdapter} from '../User/userAdapter';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

const toAuthCredentials = (
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials => {
  return {
    token: authCredentialsAPI.auth.token,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
};

export const authAdapter = {
  toAuthCredentials,
};
