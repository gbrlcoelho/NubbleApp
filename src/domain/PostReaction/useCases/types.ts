import {Post, PostReactionBase, PostReactionType} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';

export interface ReactToPostParams {
  post: Post;
  postReactionType: PostReactionType;
  options?: MutationOptions<PostReactionBase>;
  queryKeys?: QueryKeys[];
}
