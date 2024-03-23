import {BoxProps} from '@components';

export interface ProgressIndicatorProps extends BoxProps {
  total: number;
  currentIndex: number;
}
