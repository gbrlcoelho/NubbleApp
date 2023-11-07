import {REACT_APP_BASE_URL} from '@env';
import {HttpResponse, http} from 'msw';

import {PageAPI} from '@api';
import {POST_COMMENT_PATH, PostCommentAPI} from '@domain';

import {mockedData} from './mocks';

export const postCommentHandlers = [
  http.get(`${REACT_APP_BASE_URL}/${POST_COMMENT_PATH}`, async () => {
    const response: PageAPI<PostCommentAPI> =
      mockedData.mockedPostCommentResponse;

    return HttpResponse.json(response, {status: 200});
  }),

  http.post(`${REACT_APP_BASE_URL}${POST_COMMENT_PATH}`, async () => {
    const response: PostCommentAPI = mockedData.mateusPostCommentAPI;

    return HttpResponse.json(response, {status: 200});
  }),
];
