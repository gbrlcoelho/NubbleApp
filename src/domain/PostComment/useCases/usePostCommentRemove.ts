import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postCommentService} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';

export const usePostCommentRemove = (
  postId: number,
  options?: MutationOptions<string>,
) => {
  const queryClient = useQueryClient();

  const {mutate} = useMutation<string, unknown, {postCommentId: number}>({
    mutationFn: ({postCommentId}) => postCommentService.remove(postCommentId),
    onSuccess: data => {
      queryClient.invalidateQueries([QueryKeys.PostCommentList, postId]);
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'ocorreu um erro');
      }
    },
  });

  return {
    mutate,
  };
};
