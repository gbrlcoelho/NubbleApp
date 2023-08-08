import {MutationOptions, useMutation} from '@infra';

import {postCommentService} from '../postCommentService';

export const usePostCommentRemove = (options?: MutationOptions<string>) => {
  return useMutation<{postCommentId: number}, string>(
    ({postCommentId}) => postCommentService.remove(postCommentId),
    options,
  );
};
