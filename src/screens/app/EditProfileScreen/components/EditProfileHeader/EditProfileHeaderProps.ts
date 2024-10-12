import {BoxProps} from '@components';
import {User} from '@domain';

export interface EditProfileHeaderProps extends BoxProps {
  user?: User;
}
