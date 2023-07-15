import {REACT_APP_BASE_URL} from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    Authorization:
      'Bearer MTI.u70igmrJOJ2NzjV45vnYfMJMF4IETCv6YUM1v1XITpnbc6xZ_PpezW-KQHmi',
  },
});
