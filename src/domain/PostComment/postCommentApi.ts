import {PageAPI, PageParams, api} from '@api';

import {PostCommentAPI} from './postCommentTypes';

const getList = async (
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> => {
  const response = await api.get<PageAPI<PostCommentAPI>>(
    `user/post_comment?${post_id}`,
    {
      params: {
        post_id,
        ...pageParams,
      },
    },
  );
  return response.data;
};

export const postCommentApi = {
  getList,
};
