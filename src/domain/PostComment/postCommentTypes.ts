import {UserAPI} from '@domain';

export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  createdAtRelative: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number;
  message: string;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
  user: UserAPI;
  meta: any;
}
