import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

import {TextPresets} from './TextPresets';

export const SRText = createText<Theme>();

type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextPresets;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}
