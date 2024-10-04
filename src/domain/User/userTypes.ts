export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profileUrl: string;
  isOnline: boolean;
  fullName: string;
  meta: {
    followingCount: string;
    followersCount: string;
  };
}

export interface UserAPI {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  profile_url: string;
  is_online: boolean;
  full_name: string;
  meta: {
    following_count: string;
    followers_count: string;
  };
}
