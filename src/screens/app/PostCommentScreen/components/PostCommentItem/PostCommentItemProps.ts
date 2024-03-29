import {PostComment} from '@domain';

export interface PostCommentItemProps {
  postId: number;
  postComment: PostComment;
  userId: number | null;
  postAuthorId: number;
}
