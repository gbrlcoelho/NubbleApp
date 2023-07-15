import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

const getList = async (): Promise<PageAPI<PostAPI>> => {
  let response = await fetch('http://192.168.1.9:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MTI.u70igmrJOJ2NzjV45vnYfMJMF4IETCv6YUM1v1XITpnbc6xZ_PpezW-KQHmi',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();
  return data;
};

export const postApi = {
  getList,
};
