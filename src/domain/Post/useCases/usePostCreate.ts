import {useMutation, useQueryClient} from '@tanstack/react-query';

import {Post, postService} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';
import {ImageForUpload, multimediaService} from '@services';

export const usePostCreate = (options?: MutationOptions<Post>) => {
  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    Post,
    unknown,
    {text: string; imageCover: ImageForUpload}
  >({
    mutationFn: ({text, imageCover}) => postService.create(text, imageCover),
    onSuccess: post => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.PostList]});
      if (options?.onSuccess) {
        options.onSuccess(post);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'Erro ao criar o post');
      }
    },
  });

  const createPost = async ({
    description,
    imageUri,
  }: {
    description: string;
    imageUri: string;
  }) => {
    const imageCover = await multimediaService.prepareImageForUpload(imageUri);

    mutate({text: description, imageCover});
  };

  return {
    isLoading,
    isError,
    createPost,
  };
};
