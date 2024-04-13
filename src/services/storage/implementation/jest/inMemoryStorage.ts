import {jest} from '@jest/globals';

import {Storage} from '../../storage';

let storage: Record<string, any> = {};

export const inMemoryStorage: Storage = {
  getItem: jest.fn((key: string) => {
    if (key in storage) {
      return storage[key];
    } else {
      return null;
    }
  }),
  removeItem: jest.fn(async (key: string) => {
    if (key in storage) {
      delete storage[key];
    }
  }),
  setItem: jest.fn(async (key: string, value) => {
    storage[key] = value;
  }),
};
