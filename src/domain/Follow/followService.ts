import {apiAdapter} from '@api';
import {User} from '@domain';
import {Page} from '@types';

import {followAdapter} from './followAdapter';
import {followApi} from './followApi';
import {FollowUser} from './followTypes';

const getMyFollowingList = async (page: number): Promise<Page<FollowUser>> => {
  const followingUserPageAPI = await followApi.getMyFollowingList({
    page,
    per_page: 10,
  });

  return apiAdapter.toPageModel(
    followingUserPageAPI,
    followAdapter.fromFollowingToUser,
  );
};

const getMyFollowersList = async (page: number): Promise<Page<FollowUser>> => {
  const followPageAPI = await followApi.getMyFollowersList({
    page,
    per_page: 10,
  });

  return apiAdapter.toPageModel(
    followPageAPI,
    followAdapter.fromFollowerToUser,
  );
};

const isFollowing = async (userId: string): Promise<{isFollowing: boolean}> => {
  return followApi.isFollowing(userId);
};

const followUser = async (userId: number): Promise<User> => {
  const data = await followApi.followUser(userId);
  return followAdapter.fromFollowingToUser(data);
};

const removeFollow = async (followId: number): Promise<void> => {
  await followApi.removeFollow(followId);
};

export const followService = {
  getMyFollowingList,
  getMyFollowersList,
  isFollowing,
  followUser,
  removeFollow,
};
