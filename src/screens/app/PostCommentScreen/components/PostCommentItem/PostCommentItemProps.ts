import {PostComment} from '@domain';

export interface PostCommentItemProps {
  postComment: PostComment;
  onRemoveComment: () => void;
  userId: number;
  postAuthorId: number;
}
