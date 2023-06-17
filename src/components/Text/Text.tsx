import React from 'react';

import {$fontSizes, getFontFamily} from './TextPresets';
import {SRText, TextProps} from './TextProps';

export const Text = ({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  ...sRTextProps
}: TextProps) => {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...sRTextProps}>
      {children}
    </SRText>
  );
};
