import {Post, PostAPI} from './postTypes';

/**
 * @description Adapter PostAPI to Post
 */
const toPost = (postAPI: PostAPI): Post => {
  return {
    id: postAPI.id,
    text: postAPI.text,
    author: {
      id: postAPI.user.id,
      profileURL: postAPI.user.profile_url,
      name: postAPI.user.full_name,
      userName: postAPI.user.username,
    },
    imageURL: postAPI.image_url,
    reactionCount: parseInt(postAPI.meta.like_count, 10),
    favoriteCount: parseInt(postAPI.meta.favorite_count, 10),
    commentCount: parseInt(postAPI.meta.comments_count, 10),
  };
};

export const postAdapter = {
  toPost,
};
