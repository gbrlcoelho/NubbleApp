import {BoxProps} from '@components';
import {TextInputProps as RNTextInputProps} from 'react-native';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}
