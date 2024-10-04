import {User, UserAPI} from './userTypes';

const toUser = (userApi: UserAPI): User => {
  return {
    id: userApi.id,
    firstName: userApi.first_name,
    lastName: userApi.last_name,
    username: userApi.username,
    email: userApi.email,
    profileUrl: userApi.profile_url,
    isOnline: userApi.is_online,
    fullName: userApi.full_name,
    meta: {
      followingCount: userApi.meta.following_count,
      followersCount: userApi.meta.followers_count,
    },
  };
};

export const userAdapter = {
  toUser,
};
