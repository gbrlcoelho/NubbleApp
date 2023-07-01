import {postListMock} from './postListMock';
import {Post} from './types';

const getList = async (): Promise<Post[]> => {
  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
};

export const postApi = {
  getList,
};
