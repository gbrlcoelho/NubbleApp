import {AuthCredentials, UserAPI, userAdapter} from '@domain';

const userAPI: UserAPI = {
  id: 7,
  first_name: 'Gabriel',
  last_name: 'Coelho',
  username: 'gbrlcoelho',
  email: 'gbrlcoelho@coffstack.com',
  profile_url:
    'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png',
  is_online: false,
  full_name: 'Gabriel Coelho',
  meta: {
    following_count: '10',
    followers_count: '20',
  },
};

export const userAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2030-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh-token',
  user: userAdapter.toUser(userAPI),
};

export const mockUtils = {
  userAPI,
  userAuthCredentials,
};
