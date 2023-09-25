import {PostComment} from '@domain';

export interface PostCommentItemProps {
  postId: number;
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
}
