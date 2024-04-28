import {postReactionService} from '../postReactionService';

import {ReactToPostParams} from './types';

export const useReactToPost = ({post, postReactionType}: ReactToPostParams) => {
  const hasReacted = postReactionService.hasReactedToPost(
    post.reactions,
    postReactionType,
  );

  return {
    hasReacted,
  };
};
