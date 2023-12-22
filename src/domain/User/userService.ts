import {apiAdapter} from '@api';

import {userAdapter} from './userAdapter';
import {userApi} from './userApi';

const getById = async (id: number) => {
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
};

const searchUser = async (search: string) => {
  const userAPIPage = await userApi.getList(search);
  return apiAdapter.toPageModel(userAPIPage, userAdapter.toUser);
};

export const userService = {
  getById,
  searchUser,
};
