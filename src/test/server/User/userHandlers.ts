import {REACT_APP_BASE_URL} from '@env';
import {HttpResponse, http} from 'msw';

import {PageAPI} from '@api';
import {USER_PATH, UserAPI} from '@domain';

import {userMocked} from './userMocked';

const FULL_URL = `${REACT_APP_BASE_URL}/${USER_PATH}`;

export const userHandlers = [
  http.get(FULL_URL, async () => {
    const response: PageAPI<UserAPI> = userMocked.mockedUserResponse;

    return HttpResponse.json(response, {status: 200});
  }),

  http.get<{userId: string}>(`${FULL_URL}/:userId`, async ({params}) => {
    const userApi = userMocked.userList.find(
      user => user.id.toString() === params.userId,
    );

    return HttpResponse.json(userApi, {status: 200});
  }),
];
