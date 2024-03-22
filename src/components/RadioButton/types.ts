export interface RadioButtonProps {
  isSelected: boolean;
  onPress: () => void;
}

export interface RadioButtonItemProps extends RadioButtonProps {
  label: string;
  description?: string;
}

export interface RadioButtonSelectorProps<T extends Record<string, any>> {
  items: T[];
  selectedItem?: T;
  onSelect: (item: T) => void;
  labelKey: keyof T;
  descriptionKey: keyof T;
  valueKey: keyof T;
}
