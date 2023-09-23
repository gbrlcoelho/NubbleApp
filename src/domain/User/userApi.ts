import {api} from '@api';

import {UserAPI} from './userTypes';

const PATH = 'users';

const getById = async (userId: string) => {
  const response = await api.get<UserAPI>(`${PATH}/${userId}`);
  return response.data;
};

export const userApi = {
  getById,
};
