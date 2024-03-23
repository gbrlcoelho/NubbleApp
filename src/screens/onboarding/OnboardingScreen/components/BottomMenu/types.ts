import {OnboardingPageProps} from '../OnboardingPage/types';

export interface BottomMenuProps extends Omit<OnboardingPageProps, 'page'> {
  isLast: boolean;
}
