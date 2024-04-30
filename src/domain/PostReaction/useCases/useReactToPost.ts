import {useState} from 'react';

import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postReactionService, type PostReactionBase} from '@domain';

import {ReactToPostParams} from './types';

export const useReactToPost = ({
  post,
  postReactionType,
  options,
  queryKeys,
}: ReactToPostParams) => {
  const queryClient = useQueryClient();

  const initialHasReacted = postReactionService.hasReactedToPost(
    post.reactions,
    postReactionType,
  );

  const initialReactionCount =
    postReactionType === 'like' ? post.reactionCount : post.favoriteCount;

  const [reactionState, setReactionState] = useState({
    hasReacted: initialHasReacted,
    reactionCount: initialReactionCount,
  });

  const {mutate} = useMutation<PostReactionBase, Error>({
    mutationFn: () =>
      postReactionService.reactToPost(post.id, postReactionType),
    onSuccess: () => {
      if (queryKeys) {
        queryKeys.forEach(queryKey => {
          queryClient.invalidateQueries([queryKey]);
        });
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
      toggleReactionState();
    },
  });

  const toggleReactionState = () => {
    setReactionState(prev => ({
      hasReacted: !prev.hasReacted,
      reactionCount: prev.hasReacted
        ? prev.reactionCount - 1
        : prev.reactionCount + 1,
    }));
  };

  const reactToPost = () => {
    toggleReactionState();
    mutate();
  };

  return {
    hasReacted: reactionState.hasReacted,
    reactionCount: reactionState.reactionCount,
    reactToPost,
  };
};
