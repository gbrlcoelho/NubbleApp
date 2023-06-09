import {TextProps as RNTextProps} from 'react-native';

export interface TextProps extends RNTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';
