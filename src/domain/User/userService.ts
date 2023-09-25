import {userAdapter} from './userAdapter';
import {userApi} from './userApi';

const getById = async (id: number) => {
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
};

export const userService = {
  getById,
};
