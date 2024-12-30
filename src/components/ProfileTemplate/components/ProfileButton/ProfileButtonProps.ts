export type ButtonVariants =
  | 'myProfile'
  | 'isFollowing'
  | 'isNotFollowing'
  | 'loading';

export interface ProfileButtonProps {
  isMyProfile?: boolean;
  isFollowing?: boolean;
  userId: number;
}
