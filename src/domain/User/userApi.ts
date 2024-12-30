import {PageAPI, api} from '@api';

import {UpdateUserParams, UserAPI} from './userTypes';

export const USER_PATH = 'users';

const getById = async (userId: string): Promise<UserAPI> => {
  const response = await api.get<UserAPI>(`${USER_PATH}/${userId}`);
  return response.data;
};

const getList = async (search: string): Promise<PageAPI<UserAPI>> => {
  const response = await api.get<PageAPI<UserAPI>>(`${USER_PATH}`, {
    params: {search},
  });
  return response.data;
};

// TODO: Move it to Follow domain when it is created
const isFollowing = async (userId: string): Promise<{isFollowing: boolean}> => {
  const response = await api.get<{isFollowing: boolean}>(
    `user/follow/is-following/${userId}`,
  );
  return response.data;
};

const updateUser = async (params: UpdateUserParams) => {
  const response = await api.put<UserAPI>(`${USER_PATH}`, params);
  return response.data;
};

export const userApi = {
  getById,
  getList,
  isFollowing,
  updateUser,
};
