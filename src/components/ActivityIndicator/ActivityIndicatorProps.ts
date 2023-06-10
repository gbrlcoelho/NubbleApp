import {ThemeColors} from '@theme';
import {ActivityIndicatorProps as RNActivityIndicatorProps} from 'react-native';

export interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}
