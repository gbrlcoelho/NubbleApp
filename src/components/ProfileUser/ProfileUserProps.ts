import {User} from '@domain';

export type ProfileUserProps = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
};
