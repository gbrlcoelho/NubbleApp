import {User} from '@domain';

export interface ProfileHeaderProps {
  user: User;
  isMyProfile?: boolean;
  publicationsCount: string;
}
