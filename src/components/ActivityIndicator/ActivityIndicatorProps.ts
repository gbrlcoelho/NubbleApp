import {ActivityIndicatorProps as RNActivityIndicatorProps} from 'react-native';

import {ThemeColors} from '@theme';

export interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}
