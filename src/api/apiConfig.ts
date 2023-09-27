import {REACT_APP_BASE_URL} from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: REACT_APP_BASE_URL,
});
