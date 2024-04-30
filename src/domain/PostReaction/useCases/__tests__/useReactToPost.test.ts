import {describe, expect, it, jest} from '@jest/globals';
import {act, renderHook, waitFor} from 'test-utils';

import {postReactionService, useReactToPost} from '@domain';

import {
  mockedPostWithLike,
  mockedPostWithoutLike,
} from './mockedData/mockedPost';

describe('useReactToPost', () => {
  it('should update hasReacted and reactionCount when react to post', async () => {
    jest
      .spyOn(postReactionService, 'reactToPost')
      .mockResolvedValue(mockedPostWithoutLike.response);

    const {result} = renderHook(() =>
      useReactToPost({
        post: mockedPostWithoutLike.post,
        postReactionType: 'like',
      }),
    );

    expect(result.current.hasReacted).toBe(false);
    expect(result.current.reactionCount).toBe(
      mockedPostWithoutLike.post.reactionCount,
    );

    act(() => {
      result.current.reactToPost();
    });

    await waitFor(() => expect(result.current.hasReacted).toBe(true));
    await waitFor(() => {
      expect(result.current.reactionCount).toBe(
        mockedPostWithoutLike.post.reactionCount + 1,
      );
    });
  });

  it('should revert hasReacted and reactionCount to the original values when react to post fails', async () => {
    const errorMessage = 'API Error';

    jest
      .spyOn(postReactionService, 'reactToPost')
      .mockRejectedValueOnce(new Error(errorMessage));

    const mockedOnError = jest.fn();

    const {result} = renderHook(() =>
      useReactToPost({
        post: mockedPostWithLike.post,
        postReactionType: 'like',
        options: {onError: mockedOnError},
      }),
    );

    expect(result.current.hasReacted).toBe(true);
    expect(result.current.reactionCount).toBe(
      mockedPostWithLike.post.reactionCount,
    );

    act(() => {
      result.current.reactToPost();
    });

    await waitFor(() => expect(result.current.hasReacted).toBe(false));
    await waitFor(() => {
      expect(result.current.reactionCount).toBe(
        mockedPostWithLike.post.reactionCount - 1,
      );
    });

    expect(mockedOnError).toHaveBeenCalledWith(errorMessage);
  });
});
