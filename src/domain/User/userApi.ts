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

const updateUser = async (params: UpdateUserParams) => {
  const response = await api.put<UserAPI>(`${USER_PATH}`, params);
  return response.data;
};

const addNotificationToken = async (token: string): Promise<string> => {
  const response = await api.post<string>(`${USER_PATH}/notification-token`, {
    token,
  });
  return response.data;
};

const deleteNotificationToken = async (): Promise<string> => {
  const response = await api.delete<string>(`${USER_PATH}/notification-token`);
  return response.data;
};

export const userApi = {
  getById,
  getList,
  updateUser,
  addNotificationToken,
  deleteNotificationToken,
};
