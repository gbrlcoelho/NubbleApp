import {PageAPI, PageParams, api} from '@api';

import {PostReactionAPI, PostReactionType} from './postReactionTypes';

const POST_REACTION_PATH = 'user/reactions';

type MyReactionsParams = PageParams & {
  post_id?: number;
  reaction_type?: PostReactionType;
};

const getMyReactions = async (myReactionsParam?: MyReactionsParams) => {
  const response = await api.get<PageAPI<PostReactionAPI>>(
    `${POST_REACTION_PATH}/my-reactions`,
    {
      params: {
        ...myReactionsParam,
      },
    },
  );

  return response.data;
};

const createOrUpdateReaction = async (
  post_id: number,
  reaction_type: PostReactionType,
): Promise<PostReactionAPI> => {
  const path = `${POST_REACTION_PATH}/${post_id}/${reaction_type}`;
  const response = await api.post<PostReactionAPI>(path);
  return response.data;
};

export const postReactionApi = {
  getMyReactions,
  createOrUpdateReaction,
};
