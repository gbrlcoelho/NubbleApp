export interface RadioButtonProps {
  isSelected: boolean;
  onPress: () => void;
}

export interface RadioButtonItemProps extends RadioButtonProps {
  label: string;
  description?: string;
}

export interface RadioButtonSelectorProps {
  items: RadioButtonItemProps[];
}
