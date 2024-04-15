import React from 'react';

import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

import {mockedPost} from './mockedData/mockedPost';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual(
    '@react-navigation/native',
  ) as Record<string, unknown>;
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not show the comment link if it has no comments', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/);

    expect(commentLinkElement).toBeFalsy();
  });

  it('should navigate to the post comment screen when the comment link is pressed', () => {
    render(<PostBottom {...mockedPost} commentCount={4} />);

    fireEvent.press(screen.getByText(/comentário/));

    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });

  it('should show the comment link if it has one comment', () => {
    render(<PostBottom {...mockedPost} commentCount={1} />);

    const commentLinkElement = screen.getByText(/comentário/);

    expect(commentLinkElement).toBeTruthy();
  });

  it('should show the comment link if it has more than one comment', () => {
    render(<PostBottom {...mockedPost} commentCount={2} />);

    const commentLinkElement = screen.getByText(/comentário/);

    expect(commentLinkElement).toBeTruthy();
  });
});
