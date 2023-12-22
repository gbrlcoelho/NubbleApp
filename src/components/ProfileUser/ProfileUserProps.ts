import {User} from '@domain';

import {PressableBoxProps} from '../Box/Box';

export type ProfileUserProps = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
} & PressableBoxProps;
