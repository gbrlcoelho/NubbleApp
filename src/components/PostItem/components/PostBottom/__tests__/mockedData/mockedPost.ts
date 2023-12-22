import {Post} from '@domain';

export const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 3,
  favoriteCount: 2,
  reactionCount: 3,
  text: 'fake-text',
  author: {
    id: 1,
    name: 'Maria Julia',
    profileUrl: 'https://example.com',
    username: 'mariajulia',
  },
};
