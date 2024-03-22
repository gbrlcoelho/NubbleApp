import React from 'react';

import {Box, RadioButtonItem, Separator} from '@components';

import {RadioButtonSelectorProps} from './types';

export const RadioButtonSelector = ({items}: RadioButtonSelectorProps) => {
  return (
    <Box>
      {items.map((item, index) => (
        <Box key={item.label}>
          <RadioButtonItem {...item} />
          {index < items.length - 1 && <Separator />}
        </Box>
      ))}
    </Box>
  );
};
