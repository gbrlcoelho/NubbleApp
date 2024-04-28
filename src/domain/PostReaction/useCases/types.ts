import {Post, PostReactionType} from '@domain';

export interface ReactToPostParams {
  post: Post;
  postReactionType: PostReactionType;
}
