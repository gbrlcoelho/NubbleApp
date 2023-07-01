import {postApi} from './postApi';
import {Post} from './types';

const getList = async (): Promise<Post[]> => {
  const postList = await postApi.getList();
  return postList;
};

export const postService = {
  getList,
};
