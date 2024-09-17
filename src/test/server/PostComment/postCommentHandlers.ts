import {cloneDeep} from 'lodash';
import {HttpResponse, http} from 'msw';

import {BASE_URL, PageAPI} from '@api';
import {POST_COMMENT_PATH, PostCommentAPI} from '@domain';

import {mockedData} from './mocks';

const FULL_URL = `${BASE_URL}/${POST_COMMENT_PATH}`;

let inMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse);

export const resetInMemoryResponse = () => {
  inMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse);
};

export const postCommentHandlers = [
  http.get(FULL_URL, async () => {
    const response: PageAPI<PostCommentAPI> = inMemoryResponse;

    return HttpResponse.json(response, {status: 200});
  }),

  http.post<any, {post_id: number; message: string}>(
    FULL_URL,
    async ({request}) => {
      const body = await request.json();

      const newPostCommentAPI: PostCommentAPI = {
        ...mockedData.postCommentAPI,
        id: 999,
        post_id: body.post_id,
        message: body.message,
      };

      inMemoryResponse.data = [newPostCommentAPI, ...inMemoryResponse.data];
      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total + 1,
      };

      return HttpResponse.json(newPostCommentAPI, {status: 201});
    },
  ),

  http.delete<{postCommentId: string}>(
    `${FULL_URL}/:postCommentId`,
    async ({params}) => {
      const postCommentId = params.postCommentId;

      inMemoryResponse.data = inMemoryResponse.data.filter(
        item => item.id.toString() !== postCommentId,
      );

      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total - 1,
      };

      return HttpResponse.json({message: 'removed'}, {status: 200});
    },
  ),
];
