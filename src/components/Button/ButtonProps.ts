import {TouchableOpacityBoxProps} from '@components/Box/Box';
import {ButtonPreset} from './ButtonPresets';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}
