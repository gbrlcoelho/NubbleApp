import {apiAdapter} from '@api';
import {ImageForUpload} from '@services';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

const getList = async (page: number, userId?: number): Promise<Page<Post>> => {
  const postPageAPI = await postApi.getList({
    page,
    per_page: 10,
    user_id: userId,
  });
  return apiAdapter.toPageModel(postPageAPI, postAdapter.toPost);
};

const create = async (
  text: string,
  imageCover: ImageForUpload,
): Promise<Post> => {
  const postAPIData = await postApi.create(text, imageCover);

  return postAdapter.toPost(postAPIData);
};

const getById = async (postId: number): Promise<Post> => {
  const postAPIData = await postApi.getById(postId.toString());
  return postAdapter.toPost(postAPIData);
};

export const postService = {
  getList,
  create,
  getById,
};
