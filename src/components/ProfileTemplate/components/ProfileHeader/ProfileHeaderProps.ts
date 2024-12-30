import {UserDetails} from '@domain';

export interface ProfileHeaderProps {
  userDetails: UserDetails;
  isMyProfile?: boolean;
  publicationsCount: string;
}
