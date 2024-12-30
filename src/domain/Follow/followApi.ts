import {PageAPI, PageParams, api} from '@api';

import {FollowerUserAPI, FollowingUserAPI} from './followTypes';

const isFollowing = async (userId: string): Promise<{isFollowing: boolean}> => {
  const response = await api.get<{isFollowing: boolean}>(
    `user/follow/is-following/${userId}`,
  );
  return response.data;
};

const followUser = async (userId: number): Promise<FollowingUserAPI> => {
  const response = await api.post(
    'user/follow',
    {},
    {params: {followed_user_id: userId}},
  );
  return response.data;
};

const removeFollow = async (followId: number): Promise<string> => {
  const response = await api.delete(`user/follow/${followId}`);
  return response.data;
};

const getMyFollowingList = async (
  params?: PageParams,
): Promise<PageAPI<FollowingUserAPI>> => {
  const response = await api.get<PageAPI<FollowingUserAPI>>(
    'user/follow/following',
    {
      params,
    },
  );
  return response.data;
};

const getMyFollowersList = async (
  params?: PageParams,
): Promise<PageAPI<FollowerUserAPI>> => {
  const response = await api.get<PageAPI<FollowerUserAPI>>(
    'user/follow/followers',
    {
      params,
    },
  );
  return response.data;
};

export const followApi = {
  isFollowing,
  followUser,
  removeFollow,
  getMyFollowingList,
  getMyFollowersList,
};
