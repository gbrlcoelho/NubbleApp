import {BoxProps} from '@components';

import {ScreenProps} from '../../ScreenProps';

export type ScreenHeaderProps = Pick<
  ScreenProps,
  'canGoBack' | 'title' | 'HeaderComponent'
> &
  BoxProps;
