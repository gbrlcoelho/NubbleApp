import React from 'react';

import {Box, RadioButtonItem, Separator} from '@components';

import {RadioButtonSelectorProps} from './types';

export const RadioButtonSelector = <T extends Record<string, any>>({
  items,
  selectedItem,
  onSelect,
  labelKey,
  descriptionKey,
  valueKey,
}: RadioButtonSelectorProps<T>) => {
  return (
    <Box>
      {items.map((item, index) => (
        <Box key={item.label}>
          <RadioButtonItem
            label={item[labelKey]}
            description={item[descriptionKey]}
            onPress={() => onSelect(item)}
            isSelected={
              !!selectedItem && selectedItem[valueKey] === item[valueKey]
            }
          />
          {index < items.length - 1 && <Separator />}
        </Box>
      ))}
    </Box>
  );
};
