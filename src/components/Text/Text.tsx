import React from 'react';
import {Text as RNText} from 'react-native';
import {TextProps} from './TextProps';
import {$fontSizes, getFontFamily} from './TextStyles';

export const Text = ({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  ...rest
}: TextProps) => {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);
  return (
    <RNText style={[$fontSizes[preset], {fontFamily}, style]} {...rest}>
      {children}
    </RNText>
  );
};
