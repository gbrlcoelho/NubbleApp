import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  BellOnIcon,
  BookmarkFillIcon,
  BookmarkIcon,
  CameraIcon,
  ChatIcon,
  ChatOnIcon,
  CheckIcon,
  CheckRoundIcon,
  ChevronRightIcon,
  CommentIcon,
  ErrorRoundIcon,
  EyeOffIcon,
  EyeOnIcon,
  FlashOffIcon,
  FlashOnIcon,
  HeartFillIcon,
  HeartIcon,
  HomeFillIcon,
  HomeIcon,
  MessageIcon,
  MessageRoundIcon,
  MessageRoundLightIcon,
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
  onPress?: () => void;
}

export interface IconBase {
  size?: number;
  color?: string;
}

export const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmarkFill: BookmarkFillIcon,
  bookmark: BookmarkIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  checkRound: CheckRoundIcon,
  chevronRight: ChevronRightIcon,
  comment: CommentIcon,
  errorRound: ErrorRoundIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  flashOff: FlashOffIcon,
  flashOn: FlashOnIcon,
  heartFill: HeartFillIcon,
  heart: HeartIcon,
  homeFill: HomeFillIcon,
  home: HomeIcon,
  message: MessageIcon,
  messageRound: MessageRoundIcon,
  messageRoundLight: MessageRoundLightIcon,
  newPost: NewPostIcon,
  profileFill: ProfileFillIcon,
  profile: ProfileIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
