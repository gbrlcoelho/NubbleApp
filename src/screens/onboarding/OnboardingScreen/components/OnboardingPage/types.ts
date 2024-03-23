import {ImageProps} from 'react-native';
interface Title {
  text: string;
  isHighlighted: boolean;
}

export interface OnboardingPageItem {
  title: Title[];
  subtitle: string;
  image: {
    light: ImageProps['source'];
    dark: ImageProps['source'];
  };
  index: number;
  total: number;
  isLast: boolean;
}

export interface OnboardingPageProps {
  page: OnboardingPageItem;
  onPressNext: () => void;
  onPressSkip: () => void;
}
