import {PageAPI, PageParams, api} from '@api';
import {ImageForUpload} from '@services';

import {PostAPI} from './postTypes';

const getList = async (params?: PageParams): Promise<PageAPI<PostAPI>> => {
  const response = await api.get<PageAPI<PostAPI>>('user/post', {params});
  return response.data;
};

const create = async (text: string, imageCover: ImageForUpload) => {
  const form = new FormData();

  form.append('text', text);
  form.append('imageCover', imageCover);

  const response = await api.postForm<PostAPI>('user/post', form);
  return response.data;
};

export const postApi = {
  getList,
  create,
};
