import {
  ArrowRightIcon,
  BellIcon,
  BellOnIcon,
  BookmarkFillIcon,
  BookmarkIcon,
  CameraIcon,
  ChatIcon,
  ChatOnIcon,
  CheckIcon,
  ChevronRightIcon,
  CommentIcon,
  EyeOffIcon,
  EyeOnIcon,
  FlashOffIcon,
  FlashOnIcon,
  HeartFillIcon,
  HeartIcon,
  HomeFillIcon,
  HomeIcon,
  MessageIcon,
  NewPostIcon,
  ProfileFillIcon,
  ProfileIcon,
  SearchIcon,
  SettingsIcon,
  TrashIcon,
} from '@icons';
import {ThemeColors} from '@theme';

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}

export interface IconBase {
  size?: number;
  color?: string;
}

export const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  arrowRightIcon: ArrowRightIcon,
  bellIcon: BellIcon,
  bellOnIcon: BellOnIcon,
  bookmarkFillIcon: BookmarkFillIcon,
  bookmarkIcon: BookmarkIcon,
  cameraIcon: CameraIcon,
  chatIcon: ChatIcon,
  chatOnIcon: ChatOnIcon,
  checkIcon: CheckIcon,
  chevronRightIcon: ChevronRightIcon,
  commentIcon: CommentIcon,
  flashOffIcon: FlashOffIcon,
  flashOnIcon: FlashOnIcon,
  heartFillIcon: HeartFillIcon,
  heartIcon: HeartIcon,
  homeFillIcon: HomeFillIcon,
  homeIcon: HomeIcon,
  messageIcon: MessageIcon,
  newPostIcon: NewPostIcon,
  profileFillIcon: ProfileFillIcon,
  profileIcon: ProfileIcon,
  searchIcon: SearchIcon,
  settingsIcon: SettingsIcon,
  trashIcon: TrashIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
