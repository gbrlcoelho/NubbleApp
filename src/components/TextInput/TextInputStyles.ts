import {BoxProps} from '@components/index';
import {$fontFamily, $fontSizes} from '@components/Text/TextPresets';
import {TextStyle} from 'react-native';

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

export const handleTextInputContainerStyle = (errorMessage?: string) => {
  const textInputContainerStyle: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
    padding: 's16',
  };

  return textInputContainerStyle;
};
