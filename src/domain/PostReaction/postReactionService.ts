import {apiAdapter} from '@api';
import {Page} from '@types';

import {postReactionAdapter} from './postReactionAdapter';
import {postReactionApi} from './postReactionApi';
import {
  PostReaction,
  PostReactionBase,
  PostReactionType,
} from './postReactionTypes';

const PER_PAGE = 10;

const getMyReactions = async (
  reactionType: PostReactionType,
  page: number,
): Promise<Page<PostReaction>> => {
  const postReactionApiPage = await postReactionApi.getMyReactions({
    page,
    per_page: PER_PAGE,
    reaction_type: reactionType,
  });

  return apiAdapter.toPageModel(
    postReactionApiPage,
    postReactionAdapter.toPostReaction,
  );
};

const reactToPost = async (
  postId: number,
  reactionType: PostReactionType,
): Promise<PostReactionBase> => {
  const postReactionBaseAPI = await postReactionApi.createOrUpdateReaction(
    postId,
    reactionType,
  );

  return postReactionAdapter.toPostReactionBase(postReactionBaseAPI);
};

const hasReactedToPost = (
  postReactions: Pick<PostReaction, 'emojiType'>[],
  postReactionType: PostReactionType,
) => {
  return postReactions.some(
    reaction => reaction.emojiType === postReactionType,
  );
};

export const postReactionService = {
  getMyReactions,
  reactToPost,
  hasReactedToPost,
};
