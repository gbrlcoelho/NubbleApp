import {PressableBoxProps, ProfileAvatarProps} from '@components';
import {User} from '@domain';

export type ProfileUserProps = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageURL'>;
} & PressableBoxProps;
