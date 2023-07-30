import {Post} from '@domain';

export type PostBottomProps = Pick<
  Post,
  'author' | 'text' | 'commentCount' | 'id'
>;
