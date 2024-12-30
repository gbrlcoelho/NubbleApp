export type ButtonVariants = 'myProfile' | 'isFollowing' | 'isNotFollowing';

export interface ProfileButtonProps {
  isMyProfile?: boolean;
  isFollowing?: boolean;
  userId: number;
}
