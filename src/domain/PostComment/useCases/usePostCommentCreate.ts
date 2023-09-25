import {useMutation, useQueryClient} from '@tanstack/react-query';

import {PostComment, postCommentService} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';

export const usePostCommentCreate = (
  postId: number,
  options?: MutationOptions<PostComment>,
) => {
  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    PostComment,
    unknown,
    {message: string}
  >({
    mutationFn: ({message}) => postCommentService.create(postId, message),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
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

  const createComment = (message: string) => mutate({message});

  return {
    createComment,
    isLoading,
    isError,
  };
};
