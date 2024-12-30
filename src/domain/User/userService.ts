import {apiAdapter} from '@api';

import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {UpdateUserParams, User} from './userTypes';

const getById = async (id: number) => {
  const userAPI = await userApi.getById(id.toString());
  const {isFollowing} = await userApi.isFollowing(id.toString());
  return userAdapter.toUserDetails(userAPI, isFollowing);
};

const searchUser = async (search: string) => {
  const userAPIPage = await userApi.getList(search);
  return apiAdapter.toPageModel(userAPIPage, userAdapter.toUser);
};

const getUpdatedUser = (
  currentUser: User,
  updateParams: UpdateUserParams,
): UpdateUserParams => {
  const updatedUser: UpdateUserParams = {};

  if (
    !!updateParams.firstName &&
    currentUser.firstName !== updateParams.firstName
  ) {
    updatedUser.firstName = updateParams.firstName;
  }

  if (
    !!updateParams.lastName &&
    currentUser.lastName !== updateParams.lastName
  ) {
    updatedUser.lastName = updateParams.lastName;
  }

  if (
    !!updateParams.username &&
    currentUser.username !== updateParams.username
  ) {
    updatedUser.username = updateParams.username;
  }

  return updatedUser;
};

const updateUser = async (
  currentUser: User,
  updateParams: UpdateUserParams,
): Promise<User> => {
  const updatedUser = getUpdatedUser(currentUser, updateParams);
  const userAPI = await userApi.updateUser(updatedUser);
  return userAdapter.toUser(userAPI);
};

export const userService = {
  getById,
  searchUser,
  updateUser,
};
