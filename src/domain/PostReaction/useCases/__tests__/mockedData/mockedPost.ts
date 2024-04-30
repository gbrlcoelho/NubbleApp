import {Post, PostReactionBase} from '@domain';

const postWithoutLike: Post = {
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
  reactions: [],
};

const postWithoutLikeResponse: PostReactionBase = {
  id: 4,
  emojiType: 'like',
  postId: postWithoutLike.id,
  userId: 1,
  createdAt: '2021-09-01T00:00:00Z',
  updatedAt: '2021-09-01T00:00:00Z',
  isChecked: true,
};

export const mockedPostWithoutLike = {
  post: postWithoutLike,
  response: postWithoutLikeResponse,
};

const postWithLike: Post = {
  ...postWithoutLike,
  reactions: [{emojiType: 'like', postId: postWithoutLike.id}],
};

const postWithLikeResponse: PostReactionBase = {
  ...postWithoutLikeResponse,
  isChecked: false,
};

export const mockedPostWithLike = {
  post: postWithLike,
  response: postWithLikeResponse,
};
