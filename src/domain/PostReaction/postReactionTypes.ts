import {Post, PostAPI, User, UserAPI} from '@domain';

export type PostReactionType = 'favorite' | 'like';

export interface PostReactionBaseAPI {
  id: number;
  emoji_type: PostReactionType;
  user_id: number;
  post_id: number;
  is_checked: boolean;
  created_at: string;
  updated_at: string;
}

export interface PostReactionBase {
  id: number;
  emojiType: PostReactionType;
  userId: number;
  postId: number;
  isChecked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PostReaction extends PostReactionBase {
  author: User;
  post: Pick<Post, 'id' | 'text' | 'imageURL'>;
}

export interface PostReactionAPI extends PostReactionBaseAPI {
  user: UserAPI;
  post: Pick<PostAPI, 'id' | 'text' | 'image_url' | 'status'>;
}
