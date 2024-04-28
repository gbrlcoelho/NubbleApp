import {Post} from '@domain';

export type PostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
> & {hideCommentAction?: boolean};
