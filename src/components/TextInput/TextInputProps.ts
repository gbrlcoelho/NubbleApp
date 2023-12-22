import {TextInputProps as RNTextInputProps} from 'react-native';

import {BoxProps} from '@components';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
  boxProps?: BoxProps;
}
