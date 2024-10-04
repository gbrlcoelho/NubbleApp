import {PageAPI, PageParams, api} from '@api';
import {ImageForUpload} from '@services';

import {PostAPI} from './postTypes';

const POST_PATH = 'user/post';

const getList = async (
  params?: PageParams & {user_id?: number},
): Promise<PageAPI<PostAPI>> => {
  const response = await api.get<PageAPI<PostAPI>>(POST_PATH, {params});
  return response.data;
};

const create = async (text: string, imageCover: ImageForUpload) => {
  const form = new FormData();

  form.append('text', text);
  form.append('imageCover', imageCover);

  const response = await api.postForm<PostAPI>(POST_PATH, form);
  return response.data;
};

const getById = async (postId: string) => {
  const response = await api.get<PostAPI>(`${POST_PATH}/${postId}`);
  return response.data;
};

export const postApi = {
  getList,
  create,
  getById,
};
