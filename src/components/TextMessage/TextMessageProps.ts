import {TextInputProps as RNTextInputProps} from 'react-native';

export interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}
